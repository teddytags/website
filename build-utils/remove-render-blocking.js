const cheerio = require("cheerio"),
  path = require("path"),
  htmlnano = require("htmlnano"),
  fs = require("fs");
/**
 * Remove CSS from head and insert it in body
 * @param {string} htmlFile the name of html file, relative to process.cwd()
 */
const removeRenderBlocking = async (htmlFile) => {
  const htmlFilePath = path.relative(process.cwd(), htmlFile);
  const htmlContent = cheerio.load(fs.readFileSync(htmlFilePath));
  htmlContent("head link[rel=stylesheet]").each((i, el) => {
    htmlContent("body").append(htmlContent.html(el));
    htmlContent(el).remove();
  });
  const processedHTML = await htmlnano.process(htmlContent.html());
  fs.writeFileSync(htmlFilePath, processedHTML.html);
};
(async () => {
  removeRenderBlocking("./build/index.html");
})();
