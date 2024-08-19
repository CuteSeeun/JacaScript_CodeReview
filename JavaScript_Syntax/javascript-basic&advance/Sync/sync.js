console.log("[Start]");

const someTask = function() {
    let deleteTime = Date.now() + 3000;
    while(Date.now() < deleteTime){
    }
    console.log("네트워크 통신 완료");
}
someTask();

console.log("[End]");