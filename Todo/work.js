// Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-List");
document.createElement('script').src = 'http://Todo/work.js';

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//Created function and created elements in JS versus HTML, appended created elements to div 
function addTodo(event){

// Prevent form from submitting
event.preventDefault();

// Todo Div

const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");

//

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
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);

todoList.appendChild(todoDiv);

//Clears input field after adding todo item to list 
todoInput.value = "";
}

function deleteCheck(e){ 
const item = e.target;
if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
    }

}
