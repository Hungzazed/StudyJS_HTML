function HideText() {
    let announ = document.getElementById("notification");
    setTimeout(() => {
        announ.style.display = "none";
    }, 3000);
}

function bulrText() {
    let announ = document.getElementById("notification");
    let opacity = 1;
    setInterval(() => {
        opacity = opacity - 0.1
        announ.style.opacity = opacity;
        if (opacity < 0) {
            clearInterval();
            announ.display = "none";
        }
    }, 500)
}

function ChangeValue() {
    let value = document.getElementById("element");
    value.innerHTML = "Noi Dung Moi";
}

function ChangeColor() {
    let value = document.getElementsByClassName("title");
    for (let i = 0; i < value.length; i++)
        value[i].style.color = "blue";
}

function ChangeBackGround() {
    let value = document.getElementsByTagName("body");
    setTimeout(() => {
        value[0].style.background = "#F87C56";
    }, 3000);
}

function ChangeButton() {
    let value = document.getElementById("Button");
    setTimeout(function() {
        value.style.height = "60px" ;
        value.style.width = "200px";
    }, 500)
}