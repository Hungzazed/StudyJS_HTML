fetch("https://api.ipify.org/?format=json")
.then((response) => {
    return response.json();
})
.then((success) => {
    let div = document.getElementById("ip");
    div.innerHTML = success.ip;
})
.catch((error) => {
    console.error("Error");
})