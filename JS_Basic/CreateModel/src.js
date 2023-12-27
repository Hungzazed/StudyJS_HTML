let button = document.getElementById("Open_button");
let model = document.getElementById("model");
let body = document.getElementsByTagName("body");
let close_button = document.getElementById("Close_button");

button.addEventListener("click", function() {
    model.style.display = "block";
    body[0].style.background = "gray";
})

close_button.addEventListener("click", function() {
    model.style.display = "none";
    body[0].style.background = "white";
})