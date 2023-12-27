function getEvenNum(a) {
    return new Promise((resolve, reject) => {
        let b = [];
        for (let i = 0; i < a.length; i++)
            if (a[i] % 2 == 0)
                b.push(a[i])
        if (b.length == 0)
            reject();
        else resolve(b);
    })
    .then ((success) => {
        console.log(success);
    })
    .catch((error) => {
        console.log("Lỗi: Không tìm thấy số chẵn.");
    })
}

getEvenNum([11, 13, 15, 17, 19] )