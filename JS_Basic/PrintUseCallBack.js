function  forEachTest(a, callBack) {
    for (let i = 0; i < a.length; i++)
        callBack(a[i]);
}

forEachTest([1,2,3,4,5], (temp) => {
    console.log(temp);
})