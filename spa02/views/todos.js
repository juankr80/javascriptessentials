import { TodoForm } from "../components/TodoForm.js";
import { TodoList } from "../components/TodoList.js";
import { store } from "../store.js";

let isSubscribed = false;

export function Todos() {

  // subscribe to re-render (only once)
  if (!isSubscribed) {
    isSubscribed = true;
    store.subscribe(() => {
      document.getElementById("app").innerHTML = Todos();
    });
  }

  return `
    <h1>Todos</h1>
    ${TodoForm()}
    ${TodoList()}
  `;
}