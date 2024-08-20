//콜백
console.log("[Start]");

//커피주문
const order = function(coffee, fn){ //주문받고자 하는 커피, 콜백
    console.log(`${coffee} 주문 접수 완료`);

    //커피 제고에 3초 걸린다고 치봐 <커피 제작>
    //3초후 완료 표시
    setTimeout( () => { //비동기로 작동 //setTimeout안에 있는 화살표 함수가 백그라운드로 이동한다. 
        fn(coffee); //이는 커피 제조하는 함수
    }, 5000); //order함수가 비동기로 돌아간다
    //이 콜백함수를 백그라운드에 등록한다
}

//커피 준비 완료 메시지 출력
const display = function(result) {
    console.log(`${result}가 준비되었습니다..`);
}

//커피주문
order("카푸치노", display);

console.log("[End]");