let body = document.getElementById("body")
let mode = localStorage.getItem("mode")
let button = document.getElementById("change");
if (mode) {
    body.classList.add(mode);
}

button.addEventListener("click", () => {
    body.classList.toggle("Dark");
    if (localStorage.getItem("mode") === "Dark") {
        localStorage.setItem("mode", "Light")
    } else {
        localStorage.setItem("mode","Dark");
    }
})


