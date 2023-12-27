function isfizzBuzz(arg) {
    if (typeof arg !== "number") {
      return "Vui lòng nhập số!";
    }
  
    if (arg % 3 === 0 && arg % 5 === 0) {
      return "FizzBuzz";
    }
  
    if (arg % 3 === 0) {
      return "Fizz";
    }
  
    if (arg % 5 === 0) {
      return "Buzz";
    } else {
      return arg;
    }
  }

console.log(isfizzBuzz(3));