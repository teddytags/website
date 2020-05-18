import * as teddy from "teddytags";
import Index from "./pages/index/index";
import REPL from "./pages/repl/repl";
import DocsOrBlog from "./pages/docs-blogs/docs-blogs";
const DOCS_PATH = "/docs";
const BLOG_PATH = "/blog";
const fetchMD = async (mdPath) => {
  //first try fetching original .md file
  const res = await fetch(`${mdPath}.md`);
  // if not available then fetch
  const md = await res.text();
  return md;
};
export default [
  {
    path: "/",
    title: "TeddyTags",
    render: () => <Index />,
  },
  {
    path: "/repl",
    title: "TeddyTags REPL",
    render: () => <REPL />,
  },
  {
    path: "/docs",
    title: "TeddyTags Docs",
    render: async () => {
      const res = await fetch(`${DOCS_PATH}/README.md`);
      const md = await res.text();
      return <DocsOrBlog text={md} />;
    },
  },
  {
    path: "/docs/:endOfPath",
    title: "TeddyTags Docs",
    render: async (p) => {
      p.endOfPath.replace(/\/$/g, "");
      const endPoints = ["api", "/", ""];
      let fetchPath = `${DOCS_PATH}/${p.endOfPath}`;
      if (endPoints.some((bp) => bp === p.endOfPath))
        fetchPath = `${DOCS_PATH}/${p.endOfPath}/README`;
      const md = await fetchMD(fetchPath);
      return <DocsOrBlog text={md} />;
    },
  },
  {
    path: "/blog",
    title: "TeddyTags Blog",
    render: async () => {
      const res = await fetch(`${BLOG_PATH}/README.md`);
      const md = await res.text();
      return <DocsOrBlog activeLink="blog" text={md} />;
    },
  },
  {
    path: "/blog/:endOfPath",
    title: "TeddyTags Blog",
    render: async (p) => {
      let fetchPath = `${BLOG_PATH}/${p.endOfPath}`;
      const md = await fetchMD(fetchPath);
      return <DocsOrBlog activeLink="blog" text={md} />;
    },
  },
];
