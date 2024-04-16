import Todo from "./Todo.js";

function createTodo(title, description, dueDate, priority) {
  return new Todo(title, description, dueDate, priority);
}

export default createTodo;
