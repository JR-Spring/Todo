const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-List");

todoButton.addEventListener("click", addTodo);

//Created elements in JS versus HTML, appended created elements to div 

function addTodo(event){


event.preventDefault();

const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");

const newTodo = document.createElement("li");
newTodo.innerText = todoInput.value;
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);


// Check mark button when items completed
const completedButton = document.createElement("button");
completedButton.innerHTML = '<i class= "fas fa-check"></i>';
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);

// Trash button
const trashButton = document.createElement('button');
trashButton.innerHTML = '<i class= "fas fa-trash"></i>';
trashButton.classList.add("complete-btn");
todoDiv.appendChild(trashButton);

todoList.appendChild(todoDiv);
}