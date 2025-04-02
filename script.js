// call from html
let inputfield = document.getElementById("inputBox");
let addbtn = document.getElementById("addBtn");
let todolists = document.getElementById("lists");

addbtn.addEventListener("click", () => {
    // clear the space from user input
    let trimValue = inputfield.value.trim();

    if (trimValue === "") {
        alert("Enter the some Values");
        return;
    }

    // creating li tags in ul
    let li = document.createElement("li");
    li.textContent = trimValue;

    // creating the remove button in li
    let delbtn = document.createElement("button");
    delbtn.textContent = "Remove";

    // connect the delbtn to li (child to parent)
    li.appendChild(delbtn);

    // connect the li to todolists (child to parent)
    todolists.appendChild(li);

    // clear input value after adding li
    document.getElementById("inputBox").value = "";

    // delete the li list
    delbtn.addEventListener("click", () => {
        todolists.removeChild(li);
    })
})