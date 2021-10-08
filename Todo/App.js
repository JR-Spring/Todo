/*//@ts-check*/

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
document.addEventListener('DOMContentLoaded', getTodos )


//***************Functions******************
function addTodo(event){
// Prevents form from submitting
event.preventDefault(); 

// Todo Div
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");

// Create LI
const newTodo = document.createElement("li");
newTodo.innerText = todoInput.value; 
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);

// Save to local storage
saveLocalTodos(todoInput.value)

// Check mark button 
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

// Clears input field after adding todo item to list 
todoInput.value = "";
}

function deleteCheck(e){ 
const item = e.target;
if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    removeLocalTodos(todo);
    todo.remove();
}

// Check mark
if (item.classList[0] === "complete-btn") {
const todo = item.parentElement;
todo.classList.toggle("completed")
}

};


// Filter options All, Complete, Incomplete in drop down 
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

 function saveLocalTodos(todo) {
    let todos;
    // If no todos created add todo to below empty array
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(){
    
   let todos;

   if (localStorage.getItem('todos') === null) {
       todos = [];
   }
   else {
       todos = JSON.parse(localStorage.getItem('todos'));
    }
   todos.forEach(function(todo){
       //Todo Div
       const todoDiv = document.createElement("div");
       todoDiv.classList.add("todo");
       
       //Created Li
       const newTodo = document.createElement("li");
       newTodo.innerText =todo; 
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
   });
}

function removeLocalTodos(todo) {
    let todos;

    if (localStorage.getItem('todos') === null) {
        todos = [];
    }
    else {
    todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos',JSON.stringify(todos));
   
}