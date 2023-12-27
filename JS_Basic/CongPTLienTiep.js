function forEachPair(a, callBack) {
    for (let i = 0; i < a.length - 1; i++)
        callBack(a[i], a[i + 1]);
}

function callBack(a, b) {
    console.log(a + b);
}

forEachPair( [5, 20, 30, 60, 90], callBack);