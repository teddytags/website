import * as teddy from "teddytags";
import codemirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material-palenight.css";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/jsx/jsx";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/display/autorefresh"
export default class Editor extends teddy.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(dom) {
    let editor = codemirror.fromTextArea(dom, {
      lineNumbers: true,
      autoRefresh: 250,
      maxLines: 15,
      mode: this.props.mode,
      theme: "material-palenight",
    });
    editor.setSize("100%", "100%");
    editor.refresh();
    if (dom.parentNode) {
      dom.parentNode.cm = editor;
    } else dom.cm = editor;
  }
  render() {
    return <textarea class="w-100 h-90" id="codeEditor"></textarea>;
  }
}
