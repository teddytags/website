import * as teddy from "teddytags";
import "prismjs";
import "assets/oml.css";
import "./Code.css";
import "assets/prism-oceanic.css";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
export default class Code extends teddy.Component {
  constructor(props) {
    super(props);
  }
  CopyToClipboard(element) {
    if (window.getSelection) {
      if (window.getSelection().empty) {
        // Chrome
        window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges) {
        // Firefox
        window.getSelection().removeAllRanges();
      }
    } else if (document.selection) {
      // IE?
      document.selection.empty();
    }

    if (document.selection) {
      var range = document.body.createTextRange();
      range.moveToElementText(element);
      range.select().createTextRange();
      document.execCommand("copy");
    } else if (window.getSelection) {
      range = document.createRange();
      range.selectNode(element);
      window.getSelection().addRange(range);
      document.execCommand("copy");
    }
  }
  componentDidMount(dom) {
    document.addEventListener("DOMContentLoaded", () => {
      dom.querySelectorAll("#copybutton").forEach((e) => {
        e.addEventListener("click", () => {
          let code = e.parentNode.parentNode.querySelector("code");
          this.CopyToClipboard(code);
        });
      });
    });
  }
  render() {
    return (
      <span>
        <div id="codewrapper">
          <button id="copybutton">Copy</button>
        </div>
        <pre class={`language-${this.props.lang}`} style="position: relative;">
          <code>{this.props.code}</code>
        </pre>
      </span>
    );
  }
}
