import * as teddy from "teddytags";
import Content from "./Content/Content";
import Navbar from "components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "assets/icons.css";
import "bootstrap/dist/js/bootstrap";
export default class App extends teddy.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main style={{ display: "flex", flexDirection: "column" }}>
        <Navbar activeLink="home" />
        <Content />
      </main>
    );
  }
}
