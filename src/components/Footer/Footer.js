import * as teddy from "teddytags";
import "./Footer.css";
export default class Footer extends teddy.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer class="page-footer">
        <h1 class="py-5 text-center">Of course, this site uses TeddyTags!</h1>
        <div class="d-flex flex-md-row flex-xs-column">
          <div class="links px-2">
            <h3>Other related stuff</h3>
            <ul>
              <li>
                <a href="https://github.com/teddytags/eslint-plugin">
                  ESLint Plugin
                </a>
              </li>
              <li>
                <a href="https://github.com/teddytags/starter-template">
                  Starter Template
                </a>
              </li>
              <li>
                <a href="javascript:alert('Coming Soon!')">CLI</a>
              </li>
            </ul>
          </div>
          <div class="links px-2">
            <h3>Social Presence</h3>
            <ul>
              <li>
                <a href="https://gitter.im/teddytags">Gitter</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}
