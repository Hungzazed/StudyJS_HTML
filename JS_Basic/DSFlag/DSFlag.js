fetch("https://restcountries.com/v2/all")
.then ((response) => {
    return response.json();
})
.then ((data) => {
    let DSli = "";
    for (let i = 0; i < data.length; i++) {
        DSli += "<li>"+ 
                    "<div class = " + "conteiner>" + 
                        "<div class = "+ "name>" + data[i].name +"</div>"+ 
                        "<img src='" + (data[i].flags.svg ? data[i].flags.svg: data[i].flag)  +"'> </div></li>";
    }
    return DSli;
})
.then ((data) => {
    let ul  = document.getElementById("flag");
    ul.innerHTML = data;
})
.catch((error) => {
    console.error("Error fetching data:", error);
});

