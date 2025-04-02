// Get DOM elements
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Add a new to-do item
addBtn.addEventListener('click', () => {
    const task = todoInput.value.trim();

    if (task === '') {
        alert('Please enter a task!');
        return;
    }

    // Create list item
    const li = document.createElement('li');
    li.textContent = task;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    // Append button to list item
    li.appendChild(deleteBtn);

    // Append list item to the list
    todoList.appendChild(li);

    // Clear input
    todoInput.value = '';

    // Add delete functionality
    deleteBtn.addEventListener('click', () => {
        todoList.removeChild(li);
    });
});





// let inputfield = document.getElementById("inputBox");
let inputfield = document.getElementById("inputBox").value.trim();
let addbtn = document.getElementById("addBtn");
let todolists = document.getElementById("lists");

addbtn.addEventListener("click", () => {
    // let trimValue = inputfield.value.trim();

    if (inputfield === "") {
        alert("Enter the some Values");
        return;
    }

    let li = document.createElement("li");
    li.textContent = inputfield;

    let delbtn = document.createElement("button");
    delbtn.textContent = "Remove";

    li.appendChild(delbtn);

    todolists.appendChild(li);

    delbtn.addEventListener("click", () => {
        todolists.removeChild(li);
    })
})