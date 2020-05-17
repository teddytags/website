import * as teddy from "teddytags";
import "./Header.css";
export default class Header extends teddy.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="jumbotron text-center hero-head">
        <div id="logo">
          <img src="big-dark-logo.svg" alt="TeddyTags Logo" />
        </div>
        <div class="lead">The superfast way to custom elements.</div>
      </div>
    );
  }
}
