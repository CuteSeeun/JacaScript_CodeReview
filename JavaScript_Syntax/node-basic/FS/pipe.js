
const fs = require("fs").promises;

const copy = function(src, dest) {
    const readStream = fs.createReadStream(src);
    const writeStream = fs.createWriteStream(dest);
    readStream.pipe(writeStream);
}

copy("./readme.txt", "./writeme.txt");
console.log("복사 완료");


/*
fs.copyFile("./readme.txt", "./writeme.txt")
    .then((data)=>{
        console.log("복사완료!"); console.log(data);
    })
*/
