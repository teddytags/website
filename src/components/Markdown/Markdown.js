import * as teddy from "teddytags";
import Prism from "prismjs";
import "assets/prism-oceanic.css";
import "components/Code/Code.css";
import "./Markdown.css";
import "assets/oml.css";
require("prismjs/components/prism-typescript");
require("prismjs/components/prism-jsx");
require("prismjs/components/prism-tsx");
require("prismjs/components/prism-bash");
require("prismjs/components/prism-shell-session");
require("prismjs/components/prism-diff");
const marked = require("marked");
marked.setOptions({
  highlight: (code, lang) => {
    if (!lang) {
      const html = Prism.highlight(code, Prism.languages.markup, "markup");
      return html;
    }
    const html = Prism.highlight(code, Prism.languages[lang], lang);
    return html;
  },
});
export default class Markdown extends teddy.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div innerHTML={marked.parse(this.props.text)}></div>;
  }
}
