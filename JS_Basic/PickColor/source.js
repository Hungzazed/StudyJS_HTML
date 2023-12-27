let color = document.getElementById("color-picker")

let preview = document.getElementById("color-preview");

color.addEventListener("change", function() {
    preview.style.backgroundColor = color.value;
})