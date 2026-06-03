import { store } from "../store.js";

export function TodoForm() {
  setTimeout(() => {
    const form = document.getElementById("todo-form");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const input = document.getElementById("todo-input");
      store.addTodo(input.value);
      input.value = "";
    });
  });

  return `
    <form id="todo-form">
      <input id="todo-input" placeholder="New todo" required />
      <button>Add</button>
    </form>
  `;
}