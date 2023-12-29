let input = document.getElementById("todo-input");
let add = document.getElementById("add-button");
let list = document.getElementById("todo-list");

let taskList = JSON.parse(localStorage.getItem("taskList")) || [];
let index = taskList.length;

function renderTasks() {
    list.innerHTML = "";
    for (let i = 0; i < taskList.length; i++) {
        const task = document.createElement("li");
        task.textContent = taskList[i];
        task.setAttribute("index", i)
        list.appendChild(task);
        localStorage.setItem("taskList", JSON.stringify(taskList));

        const tempDel = document.createElement("button");
        tempDel.textContent = "Delete"
        task.appendChild(tempDel);

        tempDel.addEventListener("click", function() {
            const taskIndex = parseInt(this.parentElement.getAttribute("index"));
            taskList.splice(taskIndex, 1);
            localStorage.setItem("taskList", JSON.stringify(taskList));
            renderTasks();
        })
    }
}

renderTasks();

add.addEventListener("click" ,function() {
    const task = document.createElement("li");
    if (input.value !== "") {
        task.textContent = input.value;
        task.setAttribute("index", index++)
        taskList.push(input.value);
        localStorage.setItem("taskList", JSON.stringify(taskList));
        list.appendChild(task);
        input.value = "";
    
        const tempDel = document.createElement("button");
        tempDel.textContent = "Delete"
        task.appendChild(tempDel);
        tempDel.addEventListener("click", function() {
            const taskIndex = parseInt(this.parentElement.getAttribute("index"));
            taskList.splice(taskIndex, 1);
            localStorage.setItem("taskList", JSON.stringify(taskList));
            renderTasks();
        })
    }
})
