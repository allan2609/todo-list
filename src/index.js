import Todo from "./Todo.js";
import createTodo from "./createTodo.js";
import Project from "./project.js";
import createProject from "./createProject.js";
import "./styles.css";

const projects = [
  new Project("Sample project"),
];

console.log(projects);

function addToProject() {
  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  const date = document.querySelector("#due-date");
  const priority = document.querySelector("#priority");
  
  projects[0].todos.push(
  createTodo(title.value, description.value, date.value, priority.value)
  );

  console.log(projects);

  title.value = "";
  description.value = "";
  date.value = "";
  priority.value = "";
}

document.querySelector(".add-item").addEventListener("click", addToProject);
