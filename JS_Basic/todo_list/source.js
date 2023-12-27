let input = document.getElementById("todo-input");
let add = document.getElementById("add-button");
let list = document.getElementById("todo-list");

add.addEventListener("click" ,function() {
    const temp = document.createElement("li");
    if (input.value !== "") {
        temp.textContent = input.value + " ";
        list.appendChild(temp);
        input.value = "";
    }

    const tempDel = document.createElement("button");
    tempDel.textContent = "Delete"
    temp.appendChild(tempDel);

    temp.addEventListener("click", function() {
        temp.classList.toggle("completed");
    })

    tempDel.addEventListener("click", function() {
        temp.remove();
    })
})