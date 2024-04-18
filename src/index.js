import Todo from "./Todo.js";
import createTodo from "./createTodo.js";
import Project from "./project.js";
import createProject from "./createProject.js";
import "./styles.css";

const projects = [
  new Project("Sample project"),
];

let activeProject = 0;

function addToProject() {
  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  const date = document.querySelector("#due-date");
  const priority = document.querySelector("#priority");
  
  projects[activeProject].todos.push(
    createTodo(title.value, description.value, date.value, priority.value)
  );

  console.log(projects);
  title.value = "";
  description.value = "";
  date.value = "";
  priority.value = "";
  
  showTodos();
}

document.querySelector(".add-todo").addEventListener("click", addToProject);
document.querySelector(".add-project").addEventListener("click", createNewProject);

function createNewProject() {
  const projectName = document.querySelector("#project-name");
  projects.push(
    createProject(projectName.value)
  );
  console.log(projects);
  showProjects();
  projectName.value = "";
}

function showProjects() {
  const projectList = document.querySelector(".project-list");
  while (projectList.hasChildNodes()) {
    projectList.removeChild(projectList.firstChild);
  }
  projects.forEach(project => { 
    const item = document.createElement("p");
    item.className = "project-item";
    item.textContent = project.projectName;
    projectList.appendChild(item);
  });
  createProjectSelector();
}

showProjects();

function createProjectSelector() {
  const projectSelector = document.querySelector(".project-selector");
  
  while (projectSelector.hasChildNodes()) {
    projectSelector.removeChild(projectSelector.firstChild);
  }
  
  const selector = document.createElement("select");
  
  for (let i = 0; i < projects.length; i++) {
    const option = document.createElement("option");
    option.textContent = projects[i].projectName;
    option.value = i;
    selector.appendChild(option);
  }
  
  selector.addEventListener("change", function() {
    activeProject = this.value;
    showTodos();
  });
  
  /*projects.forEach(project => { 
    const option = document.createElement("option");
    option.textContent = project.projectName;
    selector.appendChild(option);
  });*/
  
  projectSelector.appendChild(selector);
}

function showTodos() {
  const todoList = document.querySelector(".todo-list");
  while (todoList.hasChildNodes()) {
    todoList.removeChild(todoList.firstChild);
  }
  projects[activeProject].todos.forEach(todo => { 
    const item = document.createElement("p");
    item.className = "todo-item";
    item.textContent = todo.title;
    todoList.appendChild(item);
  });
}
