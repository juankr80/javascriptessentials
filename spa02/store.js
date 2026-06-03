export const store = {
  state: {
    todos: []
  },

  listeners: [],

  subscribe(fn) {
    this.listeners.push(fn);
  },

  notify() {
    this.listeners.forEach(fn => fn());
  },

  addTodo(text) {
    this.state.todos.push({
      id: Date.now(),
      text,
      done: false
    });
    this.notify();
  },

  toggleTodo(id) {
    const todo = this.state.todos.find(t => t.id === id);
    if (todo) {
      todo.done = !todo.done;
      this.notify();
    }
  }
};