import { Home } from "./views/home.js";
import { Todos } from "./views/todos.js";

const routes = {
  "/": Home,
  "/todos": Todos
};

export function router() {
  const path = window.location.pathname;
  const view = routes[path] || (() => "<h1>404</h1>");

  document.getElementById("app").innerHTML = view();
}

export function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}