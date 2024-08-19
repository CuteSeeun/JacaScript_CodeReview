//promise
const promise = new Promise((resolve, reject) => {
    const ok = true;
    if (ok) {
        console.log("주문 접수 완료");
        resolve(coffee("아메리카노"));
    } else {
        reject(new Error("주문 오류"));
    }
});

const coffee = function (takeout) {
    console.log(`주문하신 ${takeout}가 준비되었습니다`);
}

promise.then((message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
        const coffee_result = `카푸치노가 준비되었습니다..`;
        resolve(coffee_result);
    })
})
    .then((message2) => {
        console.log(message2);
    })
    .catch((error) => {
        console.log(error.message);
    })



//-----------------------------------------------------------
//선생님이 한거 _ 비동기를 처리하는거를 promise로 처리하면 된다


console.log("[Start]");

const order = function (coffee) {
    console.log(`${coffee} 주문 접수 완료`);

    return new Promise((resolve, reject) => {
        //커피 생산자 코드
        //커피 제조에 5초 소비된다고 가정
        setTimeout(() => {
            //비동기 커페 제조 중..
            resolve(`[${coffee}]`);
            display(`[${coffee}]`);
        }, 5000);
    });
}

const display = function (result) {
    console.log(`주문하신 ${result}가 준비되었습니다`);
}

//고객이 커피 주문
const pro = order("카푸치노");

//주문 후 고객은 다른 작업이 가능

pro.then(makedCoffee => {console.log(`${makedCoffee} 받았습니다`);})
    .catch(error => console.log(error.message));

console.log("[End]");
