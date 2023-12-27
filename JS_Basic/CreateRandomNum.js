let p = new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 10) + 1;
    if (num) {
        resolve(num);
    }
    else reject();
})

p.then((success) => {
    console.log("Số ngẫu nhiên: " + success);
})
.catch((error) => {
    console.log("Lỗi: Không thể tạo số ngẫu nhiên.")
})