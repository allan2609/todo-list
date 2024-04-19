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
  
  projectSelector.appendChild(selector);
}

document.querySelector(".add-todo").addEventListener("click", addToProject);
document.querySelector(".close-todo-dialog").addEventListener("click", () => {
  todoDialog.close();
});

document.querySelector(".add-project").addEventListener("click", addToProject);
document.querySelector(".close-project-dialog").addEventListener("click", () => {
  projectDialog.close();
});

function showTodos() {
  const todoList = document.querySelector(".todo-list");
  while (todoList.hasChildNodes()) {
    todoList.removeChild(todoList.firstChild);
  }
  projects[activeProject].todos.forEach(todo => { 
    const item = document.createElement("span");
    item.className = "todo-item";
    
    const title = document.createElement("div");
    title.className = "title";
    title.textContent = todo.title;
    
    const date = document.createElement("div");
    date.className = "date";
    date.textContent = todo.dueDate;
    
    const edit = document.createElement("div");
    const editIcon = '<svg viewBox="0 0 24 24"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>';
    edit.className = "edit";
    edit.innerHTML = editIcon;
    
    const remove = document.createElement("div");
    const removeIcon = '<svg viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>';
    remove.className = "remove";
    remove.innerHTML = removeIcon;
    
    item.appendChild(title);
    item.appendChild(date);
    item.appendChild(edit);
    item.appendChild(remove);
    todoList.appendChild(item);
  });
}

const todoDialog = document.querySelector("#todo-dialog");
const projectDialog = document.querySelector("#project-dialog");

document.querySelector(".new-todo").addEventListener("click", () => {
  todoDialog.showModal();
});

document.querySelector(".new-project").addEventListener("click", () => {
  projectDialog.showModal();
});
