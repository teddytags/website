import * as teddy from "teddytags";
import Header from "components/Header/Header";
import Code from "components/Code/Code";
import Footer from "components/Footer/Footer";
import "./Content.css";
import AnchorJS from "anchor-js";
export default class Content extends teddy.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(dom) {
    document.addEventListener("DOMContentLoaded", () => {
      const anchors = new AnchorJS({
        placement: "right",
        icon: "#",
        class: "nav-link text-secondary d-inline",
      });
      anchors.add(".content h1");
      anchors.add(".content h2");
      anchors.add(".content h3");
      fetch("https://api.npmjs.org/downloads/point/last-month/teddytags").then(
        (res) => {
          res.json().then((data) => {
            dom.querySelector("span.npm-count").innerHTML = data.downloads;
          });
        }
      );
    });
  }
  render() {
    return (
      <article class="content">
        <Header />
        <div class="pl-5 pr-5">
          <h1 class="td-title">Your DOM has got its best friend ever.</h1>
          <br />
          <h2 class="td-lead">DOM's sidekick</h2>
          <p class="lead">
            TeddyTags is like a minimal wrapper on the DOM. It just processes
            all the things you give and then lets the DOM to do its own magic.
          </p>
          <hr />
          <h2 class="td-lead">Light on Performance</h2>
          <p class="lead">
            The whole package consists just 1.5KB minified + gzipped JavaScript
            which can be plugged anywhere, in the browser or in node*.
          </p>
          <hr />
          <h2 class="td-lead">Minimal and expressive</h2>
          <p class="lead">
            TeddyTags has an API which looks minimal but is expressive. Think
            big, but write small.
          </p>
          <ul>
            <li class="lead">Defining a custom element</li>
            <Code
              lang="js"
              code="new Tag({name: 'myCustomElement', to: 'h1'})"
            ></Code>
            <li class="lead">Defining an awesome Component</li>
            <Code
              lang="jsx"
              code={[
                "class MyComponent extends Component{",
                "   constructor(props){",
                "     super(props)",
                "   }",
                "   render(){",
                "     return (",
                "       <h1>Hello, Component!</h1>",
                "     )",
                "   }",
                " }",
              ].join("\n")}
            ></Code>
          </ul>
          <hr />
          <h1 class="td-title">Statistics</h1>
          <p class="td-lead stats">
            TeddyTags has been downloaded <span class="npm-count"></span> times
            this month from NPM.
          </p>
          <h1 class="td-title">Ready to take over the world??</h1>
          <p class="lead">
            Head straight to the{" "}
            <a href="/docs/getting-started">Getting Started</a> section or get
            your hands dirty by playing with TeddyTags in the{" "}
            <a href="/repl">REPL</a>.
          </p>
        </div>
        <Footer />
      </article>
    );
  }
}
