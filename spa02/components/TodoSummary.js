import { store } from "../store.js";

export function TodoSummary() {
  
  const allTodos = store.state.todos.length;
  const completed = store.state.todos.filter( t => t.done ).length;

  return `
    <div>
        <h4>TODO Sumary</h4>
        <div>Total: ${allTodos}</div>
        <div>Completed: ${completed} - ${Math.round(((completed/allTodos)*100||0))}% </div>
        <div>Pending: ${allTodos-completed} </div>      
    </div>
  `;
}