import { Router } from "@teddytags/router";
import { register } from "./register-sw";
import routes from "./routes";
//Fetch API Polyfill
import "unfetch";
const bootstrap = () => {
  document.querySelectorAll("a").forEach((t) => {
    t.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      window.history.pushState({}, "", t.href);
    });
  });
  new Router({ container: document.querySelector("#app"), routes: routes });
  register("/service-worker.js");
};
bootstrap();
