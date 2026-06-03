import { TodoSummary } from "../components/TodoSummary.js";

export function Home() {
  return `
    <h1>Welcome</h1>
    <p>This is a Vanilla JS SPA Todo App</p>
    ${ TodoSummary() }
  `;
}