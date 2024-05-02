import createTodo from "./createTodo.js";
import Project from "./project.js";
import createProject from "./createProject.js";
import "./styles.css";

const projects = localStorage["projects"] ? retrieveProjects(localStorage["projects"]) : [
  new Project("Sample project"),
];

const todoDialog = document.querySelector("#todo-dialog");
const editTodoDialog = document.querySelector("#edit-todo-dialog");
const projectDialog = document.querySelector("#project-dialog");
const removeProjectDialog = document.querySelector("#remove-project-dialog");

let activeProject = 0;

function addTodoToProject() {
  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  const date = document.querySelector("#due-date");
  const priority = document.querySelector("#priority");
  
  projects[activeProject].todos.push(
    createTodo(title.value, description.value, date.value, priority.value)
  );

  localStorage.setItem("projects", JSON.stringify(projects));

  title.value = "";
  description.value = "";
  date.value = "";
  priority.value = "medium";
  
  showTodos();
  todoDialog.close();
}

function addProjectToProjects() {
  const projectName = document.querySelector("#project-name");
  projects.push(
    createProject(projectName.value)
  );
  activeProject = projects.length -1;
  document.querySelector("select").value = activeProject;
  createProjectSelector();
  showTodos();
  localStorage.setItem("projects", JSON.stringify(projects));
  projectDialog.close();
  projectName.value = "";
  if (projects.length != 0) {
    document.querySelector(".new-todo").disabled = false;
  }
}

function createProjectSelector() {

  const projectSelectorContainer = document.querySelector(".project-selector");
  
  while (projectSelectorContainer.hasChildNodes()) {
    projectSelectorContainer.removeChild(projectSelectorContainer.firstChild);
  }
  
  const selector = document.createElement("select");
  
  for (let i = 0; i < projects.length; i++) {
    const option = document.createElement("option");
    option.textContent = projects[i].projectName;
    option.value = i;
    selector.appendChild(option);
  }

  selector.value = activeProject;
  
  selector.addEventListener("change", function() {
    activeProject = this.value;
    showTodos();
  });
  
  projectSelectorContainer.appendChild(selector);
}

createProjectSelector();
showTodos();

function showTodos() {
  const todoList = document.querySelector(".todo-list");
  while (todoList.hasChildNodes()) {
    todoList.removeChild(todoList.firstChild);
  }
  document.querySelector(".new-todo").disabled = true;
  if (projects.length > 0) {
    document.querySelector(".new-todo").disabled = false;
    for (let i = 0; i < projects[activeProject].todos.length; i++) {
      const item = document.createElement("span");
      item.className = "todo-item";
      item.dataset.itemID = projects[activeProject].todos[i].id;

      const title = document.createElement("div");
      title.className = "title";
      title.textContent = projects[activeProject].todos[i].title;
      
      /*item.addEventListener("mouseenter", () => {
        if (projects[activeProject].todos[i].description.length > 0 && projects[activeProject].todos[i].description != undefined) {
          document.querySelector(".hidden-description").textContent = projects[activeProject].todos[i].description;
          document.querySelector(".hidden-description").style.display = "block";
          document.querySelector(".hidden-description").style.visibility = "visible";
          document.querySelector(".hidden-description").style.top = title.offsetTop + 12 + "px";
          document.querySelector(".hidden-description").style.left = title.offsetLeft + "px";
        }
      });
      
      item.addEventListener("mouseleave", () => {
        document.querySelector(".hidden-description").textContent = "";
        document.querySelector(".hidden-description").style.display = "none";
        document.querySelector(".hidden-description").style.visibility = "hidden";
      });*/
      
      const date = document.createElement("div");
      date.className = "date";
      date.textContent = projects[activeProject].todos[i].dueDate;
      
      if (projects[activeProject].todos[i].priority == "low") {
        item.classList.add("low-priority");
      } else if (projects[activeProject].todos[i].priority == "medium") {
        item.classList.add("medium-priority");
      } else if (projects[activeProject].todos[i].priority == "high") {
        item.classList.add("high-priority");
      }

      const edit = document.createElement("div");
      const editIcon = '<svg viewBox="0 0 24 24"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>';
      edit.className = "edit";
      edit.innerHTML = editIcon;
      edit.addEventListener("click", e => editTodo(e));

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

function editTodo(event) {
  const targetTodo = event.target.closest(".todo-item").dataset.itemID;
  const index = projects[activeProject].todos.findIndex(todo => todo.id == targetTodo);
  
  document.querySelector("#edit-title").value = projects[activeProject].todos[index].title;
  document.querySelector("#edit-description").value = projects[activeProject].todos[index].description;
  document.querySelector("#edit-due-date").value = projects[activeProject].todos[index].dueDate;
  document.querySelector("#edit-priority").value = projects[activeProject].todos[index].priority;
  
  editTodoDialog.showModal();

  document.querySelector(".update-todo").addEventListener("click", function() {
    console.log("update button clicked")
    updateTodo(index);
    const oldButton = document.querySelector(".update-todo")
    const newButton = oldButton.cloneNode(true);
    oldButton.parentNode.replaceChild(newButton, oldButton); //without this eventlistener starts running multiple times!?
  });
}

function updateTodo(todo) {
  console.log("updating todo")
  if (validateEditForm()) {
    projects[activeProject].todos[todo].title = document.querySelector("#edit-title").value;
    projects[activeProject].todos[todo].description = document.querySelector("#edit-description").value;
    projects[activeProject].todos[todo].dueDate = document.querySelector("#edit-due-date").value;
    projects[activeProject].todos[todo].priority = document.querySelector("#edit-priority").value;
    showTodos();
    localStorage.setItem("projects", JSON.stringify(projects));
    editTodoDialog.close();
  }
}

function removeTodo(event) {
  const targetTodo = event.target.closest(".todo-item").dataset.itemID;
  const index = projects[activeProject].todos.findIndex(todo => todo.id == targetTodo);
  projects[activeProject].todos.splice(index, 1);
  showTodos();
  localStorage.setItem("projects", JSON.stringify(projects));
  document.querySelector(".hidden-description").textContent = "";
  document.querySelector(".hidden-description").style.display = "none";
  document.querySelector(".hidden-description").style.visibility = "hidden";
};

function removeCurrentProject() {
  projects.splice(activeProject, 1);
  removeProjectDialog.close();
  if (activeProject > 0) {
    activeProject -= 1;
  }
  createProjectSelector();
  localStorage.setItem("projects", JSON.stringify(projects));
  showTodos();
  if (projects.length == 0) {
    document.querySelector(".new-todo").disabled = true;
  }
}

document.querySelector(".new-todo").addEventListener("click", () => {
  todoDialog.showModal();
});

document.querySelector(".add-todo").addEventListener("click", () => {
  if (validateTodoForm()) {
    addTodoToProject();
  }
});
  
document.querySelector(".close-todo-dialog").addEventListener("click", () => {
  document.querySelector("#title").value = "";
  document.querySelector("#title").classList.remove("invalid");
  document.querySelector("#description").value = "";
  document.querySelector("#description").classList.remove("invalid");
  document.querySelector("#due-date").value = "";
  document.querySelector("#priority").value = "medium";
  todoDialog.close();
});

document.querySelector(".close-edit-todo-dialog").addEventListener("click", () => {
  editTodoDialog.close();
});

document.querySelector(".new-project").addEventListener("click", () => {
  projectDialog.showModal();
});

document.querySelector(".add-project").addEventListener("click", () => {
  if (validateProjectForm()) {
    addProjectToProjects();
  }
});
  
document.querySelector(".close-project-dialog").addEventListener("click", () => {
  document.querySelector("#project-name").value = "";
  document.querySelector("#project-name").classList.remove("invalid");
  projectDialog.close();
});

document.querySelector(".remove-project").addEventListener("click", () => {
  removeProjectDialog.showModal();
});

document.querySelector(".remove-project-permanently").addEventListener("click", removeCurrentProject);

document.querySelector(".close-project-remove-dialog").addEventListener("click", () => {
  removeProjectDialog.close();
});

function validateTodoForm() {
  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  if (title.value.length < 3) {
    document.querySelector("#title").focus();
    return false;
  } else if (title.value.length > 30) {
    document.querySelector("#title").focus();
    return false;
  } else if (description.value.length > 70) {
    document.querySelector("#description").focus();
    return false;
  } else {
    return true;
  }
}

function validateEditForm() {
  const title = document.querySelector("#edit-title");
  const description = document.querySelector("#edit-description");
  if (title.value.length < 3) {
    document.querySelector("#edit-title").focus();
    return false;
  } else if (title.value.length > 30) {
    document.querySelector("#edit-title").focus();
    return false;
  } else if (description.value.length > 70) {
    document.querySelector("#edit-description").focus();
    return false;
  } else {
    return true;
  }
}

function validateProjectForm() {
  const name = document.querySelector("#project-name");
  if (name.value.length < 1) {
    document.querySelector("#project-name").focus();
    return false;
  } else if (name.value.length > 30) {
    document.querySelector("#project-name").focus();
    return false;
  } else {
    return true;
  }
}

document.querySelector("#title").addEventListener("input", () => {
  if (document.querySelector("#title").value.length < 3 || document.querySelector("#title").value.length > 30) {
    document.querySelector("#title").classList.add("invalid");
  } else {
    document.querySelector("#title").classList.remove("invalid");
  }
});

document.querySelector("#edit-title").addEventListener("input", () => {
  if (document.querySelector("#edit-title").value.length < 3 || document.querySelector("#edit-title").value.length > 30) {
    document.querySelector("#edit-title").classList.add("invalid");
  } else {
    document.querySelector("#edit-title").classList.remove("invalid");
  }
});

document.querySelector("#description").addEventListener("input", () => {
  if (document.querySelector("#description").value.length > 70) {
    document.querySelector("#description").classList.add("invalid");
  } else {
    document.querySelector("#description").classList.remove("invalid");
  }
});

document.querySelector("#edit-description").addEventListener("input", () => {
  if (document.querySelector("#edit-description").value.length > 70) {
    document.querySelector("#edit-description").classList.add("invalid");
  } else {
    document.querySelector("#edit-description").classList.remove("invalid");
  }
});

document.querySelector("#project-name").addEventListener("input", () => {
  if ((document.querySelector("#project-name").value.length < 1 || document.querySelector("#project-name").value.length > 30)) {
    document.querySelector("#project-name").classList.add("invalid");
  } else {
    document.querySelector("#project-name").classList.remove("invalid");
  }
});

function retrieveProjects(localStorage) {
  let parsedProjects = JSON.parse(localStorage);
  let newProjects = [];
  for (let i = 0; i < parsedProjects.length; i++) {
    let newProject = createProject(parsedProjects[i].projectName);
    let todos = parsedProjects[i].todos;
    for (let j = 0; j < todos.length; j++) {
      let todo = todos[j];
      todos[j] = createTodo(todo.title, todo.description, todo.dueDate, todo.priority);
    }
    newProject.todos = todos;
    newProjects.push(newProject);
  };
  return newProjects;
}
