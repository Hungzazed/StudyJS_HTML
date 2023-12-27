function findmax(...args) {
    let max = args[0];
    for (var i = 0; i < args.length; i++) {
        if (args[i] > max) {
            max = args[i];
        }
    }
    return max;
}

console.log(findmax(1, 2, 3, 4, 15, 6, 7, 8, 9, 10));