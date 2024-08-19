//비동기 프로그래밍
console.log("[Start]");

const transferData = function() {
    console.log("미국 서버와 통신 수행...");
}

const generalFunction = function() {
    console.log("일반 기능 수행");
}

setTimeout(transferData, 2);//비동기를 처리하는 대표적인 함수. 이 얘를 콜백으로 지정
// transferData();
setTimeout(() => {
    for(let i=0; i < 10; i++){
        console.log(i);
    }
}, 0);

generalFunction();
console.log("[End]");