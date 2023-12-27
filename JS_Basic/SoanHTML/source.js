let html_editor = document.getElementById("html-editor");
let preview_button = document.getElementById("preview-button");
let preview = document.getElementById("preview");

preview_button.addEventListener("click", function() {
    let textContent = html_editor.value;
    preview.innerHTML = textContent;
})