//함수 선언(정의)
function printSum(){//메모리 할당
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += i;
    }
    console.log('합 : ' + sum);
}
//함수 실행(호출)
printSum();

//매개변수 들어간 함수 선언 및 사용 (매개변수는 아규먼트를 받기 위한 변수임)
function printSum2(num){ //만약 위의 함수랑 식별자가 똑같다면 위의 함수는 이 함수로 대체된다. 다시 선언하는 느낌.
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    console.log('1 ~ '+ num +'의 합 : ' + sum);
}
//함수 실행(호출)
printSum2(); //매개변수를 전달받지 않아도 에러가 안난다 //0 + undefined = 0
printSum2(100);
printSum2(100, 200, 300);


//return
function max(num1, num2, num3) {
    let result = 0;
    if (num1 > num2) {
        result = num1;
    }
    else{
        result = num2;
    }

    if (result < num3) {
        result = num3;
    }
    //호출한 쪽에 값을 돌려주는거
    return; //그냥 리턴은 함수 실행이 끝나고 호출한 위치로 감
    return result; //값을 반환. 
}

let x = 3, y = 15, z = 7;
max(3, 7, 1);
//max(x, y, z); //함수를 호출하는 동시에 멈춤. 호출한 함수로 이동. 리턴해서 값을 받으면 그 값을 저장(받음)
let maxResult = max(x,y,z); //위의 결과값을 저장
                           //max라는 함수를 실행. 그럼 function max 함수로 이동해서 실행. return만나면 실행중지.
                           //결과값을 maxResult에 저장
                           //한번 출력만 할거면 log에 max()를 출력하면 된다. 변수에 저장안하고 그냥 출력
console.log(max); //함수를 참조 (작동x)
console.log(max());
console.log(max(x,y,z));





