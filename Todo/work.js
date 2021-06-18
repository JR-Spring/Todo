const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todoList');

todoButton.addEventListener("click", addTodo);

Event.preventDefault();


const addTodo = event => {

const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");

const newTodo = document.createElement("li");
newTodo.innerText = 'hello';
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);
}

// Check mark button
const completedButon = document.createElement("button");
completedButon.innerHTML = '<i class= "fas fa-check"></i>';
completedButon.classList.add("complete-btn");
todoDiv.appendChild(completedButon);

//Check trash button
const trashButton = document.createElement('button');
trashButton.innerHTML = '<i class= "fas fa-trash"></i>';
trashButton.classList.add("complete-btn");
todoDiv.appendChild(trashButton);