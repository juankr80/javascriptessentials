import { store } from "../store.js";

export function TodoList() {
  setTimeout(() => {
    document.querySelectorAll("[data-id]").forEach(el => {
      el.addEventListener("click", () => {
        const id = Number(el.dataset.id);
        store.toggleTodo(id);
      });
    });
  });

  return `
    <ul>
      ${store.state.todos.map(todo => `
        <li 
          data-id="${todo.id}"
          ${todo.done ? "class='done'" : ""}">
            ${todo.text}
        </li>
      `).join("")}
    </ul>
  `;
}