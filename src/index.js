import { Router } from "@teddytags/router";
import { register } from "./register-sw";
import routes from "./routes";
import "assets/fonts.css";
//Fetch API Polyfill
import "unfetch";
const bootstrap = () => {
  new Router({ container: document.querySelector("#app"), routes: routes });
  register("/service-worker.js");
};
bootstrap();
