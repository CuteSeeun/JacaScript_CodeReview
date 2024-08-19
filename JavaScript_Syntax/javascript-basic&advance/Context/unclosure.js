//클로저 안 썼을 때?

const increamentCount = function () {
    let count = 0; //함수 영역에 있는 것은 스택에 올라갔다가 제거된다. 
                   //그래서 다시 호출되면 상태 유지가 안된다.
    return ++count; //증가시키고 그 값을 리턴
}

let updateCount = increamentCount();
console.log(`현재 카운트 : ${updateCount}`);
console.log(increamentCount());
console.log(increamentCount());
console.log(increamentCount());
console.log(increamentCount());
console.log(increamentCount());

count = 100;
console.log(increamentCount());
