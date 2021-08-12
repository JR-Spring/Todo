//@ts-check
// Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-List");
document.createElement('script').src = 'http://Todo/work.js';
// Field just states its required not limiting 
document.getElementById("myText").required = true; 
const filterOption = document.querySelector('.filter-todo');

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener('click', filterTodo);


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

// Add to do to list
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

// Check mark
if (item.classList[0] === "complete-btn") {
const todo = item.parentElement;
todo.classList.toggle("completed")
 }

};
// Code applies to the All, Complete, Incomplete drop down, will only show todo's that are complete or incomplete when an option is chosen. 
 function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
                case "completed":
                    if(todo.classList.contains("completed")){
                        todo.style.display = "flex";
                    } 
                    else {
                        todo.style.display = "none";
                    }
                    break;
                    case "incomplete":
                        if(!todo.classList.contains('completed')){
                            todo.style.display = "flex";
                        }   
                        else {
                            todo.style.display = "none";
                        } 
                        break;              
        }                   
    });
 }  