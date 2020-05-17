import * as teddy from "teddytags";
import Editor from "components/Editor/Editor";
import Navbar from "components/Navbar/Navbar";
import "bootstrap";
import "./repl.css";
import "assets/oml.css";
import "bootstrap/dist/css/bootstrap.css";
import Cookies from "js-cookie";
const babelOpts = {
  presets: [
    ["env", { modules: false }],
    ["react", { pragma: "h" }],
  ],
};
export default class REPL extends teddy.Component {
  constructor(props) {
    super(props);
  }
  onEditorChange(editors, frame) {
    let values = {
      html: editors.html.getValue(),
      css: editors.css.getValue(),
      js: editors.js.getValue(),
    };
    frame.innerHTML = `${values.html}<style>${values.css}</style>`;
    setTimeout(() => {
      import("@babel/standalone")
        .then((e) => {
          let code = e.transform(values.js, babelOpts).code;
          new Function(code)();
        })
        .catch((e) => {
          let error = `<div id="error">
          <h1 style="color: red">${e.name}</h1>
          <pre>${e.message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>
          </div>`;
          setTimeout((frame.innerHTML = error), 1000);
        });
    }, 20);
    Cookies.set("html-code", values.html, { expires: 365, path: "" });
    Cookies.set("css-code", values.css, { expires: 365, path: "" });
    Cookies.set("js-code", values.js, { expires: 365, path: "" });
  }
  componentDidMount(dom) {
    window.h = teddy.h;
    window.render = teddy.render;
    window.Component = teddy.Component;
    window.Tag = teddy.Tag;
    window.getDOMNode = teddy.getDOMNode;
    window.unmountComponent = teddy.unmountComponent;
    let editors = {
      html: document.querySelector("#nav-html").cm,
      css: document.querySelector("#nav-css").cm,
      js: document.querySelector("#nav-js").cm,
    };
    let output = dom.querySelector(".output");
    let savedCode = {
      html: Cookies.get("html-code"),
      css: Cookies.get("css-code"),
      js: Cookies.get("js-code"),
    };
    for (const code in savedCode) {
      if (savedCode[code]) editors[code].setValue(savedCode[code]);
    }
    this.onEditorChange(editors, output);
    for (const editor in editors) {
      editors[editor].on("change", () => {
        this.onEditorChange(editors, output);
      });
    }
  }
  render() {
    return (
      <div style="width: 100%; height: 100vh">
        <Navbar activeLink="repl" />
        <div class="pt-3 h-100 row">
          <div class="editors col-md-6 h-100">
            <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <a
                  class="nav-item nav-link active"
                  id="nav-html-tab"
                  data-toggle="tab"
                  href="#nav-html"
                >
                  HTML
                </a>
                <a
                  class="nav-item nav-link"
                  id="nav-css-tab"
                  data-toggle="tab"
                  href="#nav-css"
                >
                  CSS
                </a>
                <a
                  class="nav-item nav-link"
                  id="nav-js-tab"
                  data-toggle="tab"
                  href="#nav-js"
                >
                  JS
                </a>
              </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
              <div
                class="position-relative tab-pane show active"
                id="nav-html"
                role="tabpanel"
              >
                <Editor mode="htmlmixed" />
              </div>
              <div
                class="position-relative tab-pane"
                id="nav-css"
                role="tabpanel"
              >
                <Editor mode="css" />
              </div>
              <div
                class="position-relative tab-pane"
                id="nav-js"
                role="tabpanel"
              >
                <Editor mode="jsx" />
              </div>
            </div>
          </div>
          <div class="outputs col-md-6 h-100">
            <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <a
                  class="nav-item nav-link active"
                  id="nav-output-tab"
                  data-toggle="tab"
                  href="#output"
                >
                  Output
                </a>
              </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane show active output"
                id="output"
                role="tabpanel"
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
