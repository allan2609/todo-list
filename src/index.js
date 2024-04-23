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
  priority.value = "medium";
  
  showTodos();
  todoDialog.close();
}

function createNewProject() {
  const projectName = document.querySelector("#project-name");
  projects.push(
    createProject(projectName.value)
  );
  console.log(projects);
  showProjects();
  projectDialog.close();
  projectName.value = "";
  if (projects.length != 0) {
    document.querySelector(".new-todo").disabled = false;
  }
}

function showProjects() {
  /*const projectList = document.querySelector(".project-list");
  while (projectList.hasChildNodes()) {
    projectList.removeChild(projectList.firstChild);
  }
  projects.forEach(project => { 
    const item = document.createElement("p");
    item.className = "project-item";
    item.textContent = project.projectName;
    projectList.appendChild(item);
  });*/
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

document.querySelector(".add-todo").addEventListener("click", () => {
  if (validateTodoForm()) {
    addToProject();
  }
});
  
document.querySelector(".close-todo-dialog").addEventListener("click", () => {
  todoDialog.close();
});

document.querySelector(".add-project").addEventListener("click", () => {
  if (validateProjectForm()) {
    createNewProject();
  }
});
  
document.querySelector(".close-project-dialog").addEventListener("click", () => {
  projectDialog.close();
});

document.querySelector(".close-project-remove-dialog").addEventListener("click", () => {
  removeProjectDialog.close();
});

function showTodos() {
  const todoList = document.querySelector(".todo-list");
  while (todoList.hasChildNodes()) {
    todoList.removeChild(todoList.firstChild);
  }
  if (projects.length > 0) {
    for (let i = 0; i < projects[activeProject].todos.length; i++) {
      const item = document.createElement("span");
      item.className = "todo-item";
      item.dataset.itemID = projects[activeProject].todos[i].id;

      const title = document.createElement("div");
      title.className = "title";
      title.textContent = projects[activeProject].todos[i].title;

      const date = document.createElement("div");
      date.className = "date";
      date.textContent = projects[activeProject].todos[i].dueDate;

      const edit = document.createElement("div");
      const editIcon = '<svg viewBox="0 0 24 24"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>';
      edit.className = "edit";
      edit.innerHTML = editIcon;

      const remove = document.createElement("div");
      const removeIcon = '<svg viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>';
      remove.className = "remove";
      remove.innerHTML = removeIcon;
      remove.addEventListener("click", e => removeTodo(e));

      item.appendChild(title);
      item.appendChild(date);
      item.appendChild(edit);
      item.appendChild(remove);
      todoList.appendChild(item);
    };
  }
}

const todoDialog = document.querySelector("#todo-dialog");
const projectDialog = document.querySelector("#project-dialog");
const removeProjectDialog = document.querySelector("#remove-project-dialog");

document.querySelector(".new-todo").addEventListener("click", () => {
  todoDialog.showModal();
});

document.querySelector(".new-project").addEventListener("click", () => {
  projectDialog.showModal();
});

document.querySelector(".remove-project").addEventListener("click", () => {
  removeProjectDialog.showModal();
});

function removeTodo(event) {
  const targetTodo = event.target.closest(".todo-item").dataset.itemID;
  const index = projects[activeProject].todos.findIndex(todo => todo.id == targetTodo);
  projects[activeProject].todos.splice(index, 1);
  showTodos();
};

function validateTodoForm() {
  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  const date = document.querySelector("#due-date");
  
  if (title.value.length < 3) {
    alert("Title must be filled out");
    return false;
  } else if (title.value.length > 30) {
    alert("Title too long");
    return false;
  } else if (description.value.length > 120) {
    alert("Description too long");
    return false;
  } else {
    return true;
  }
}

function validateProjectForm() {
  const name = document.querySelector("#project-name");
  if (name.value.length < 3) {
    alert("Project name must be filled out");
    return false;
  } else if (name.value.length > 30) {
    alert("Project name too long");
    return false;
  } else {
    return true;
  }
}

document.querySelector(".remove-project-permanently").addEventListener("click", removeCurrentProject);

function removeCurrentProject() {
  projects.splice(activeProject, 1);
  removeProjectDialog.close();
  createProjectSelector();
  if (activeProject > 0) {
    activeProject -= 1;
  }
  console.log("removing project. active project becomes: " + activeProject);
  showTodos();
  if (projects.length == 0) {
    document.querySelector(".new-todo").disabled = true;
  }
}
