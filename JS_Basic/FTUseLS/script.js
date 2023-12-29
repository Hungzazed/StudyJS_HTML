var fruits = ['apple', 'banana', 'orange'];

localStorage.setItem("fruitArray", JSON.stringify(fruits));

let result = localStorage.getItem("fruitArray");

document.getElementById("panel").innerHTML = JSON.parse(result);