function printKV(object) {
    for (let key in object) {
        if (typeof object[key] === "string") {
            console.log(key,': ', object[key])
        }
    }
}

const person = {
    name: "Le Van A",
    age: 40,
    height: 175,
    country: "Viet Nam",
    designation: "UI Developer",
  };

printKV(person);