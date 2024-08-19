//promise로 작성된 코드를 async와 await를 모두 사용해 바꿔보기
//-------------------------------------------------
async function orderPizza(message) {
    //console.log(message);
    return ("피자가 주문 되었습니다");
}

async function makeDough(message) {
    //console.log(message);
    return ("피자 도우를 만들었습니다");
}

async function setTopping(message) {
    //console.log(message);
    return ("피자 토핑을 완성했습니다");
}

async function bakedPizza(message) {
    //console.log(message);
    return ("피자 굽기가 완성되었습니다");
}

async function main() {
    const result1 = await orderPizza();
    const result2 = await makeDough();
    const result3 = await setTopping();
    const result4 = await bakedPizza();

    console.log(result1);
    console.log(result2);
    console.log(result3);
    console.log(result4);
}

main();

//1.
const eatPizza = async function () {
    try {
        let message = await orderPizza();
        message = await makeDough(message);
        message = await setTopping(message);
        message = await bakedPizza(message);
    } catch (error) {
        console.log(error);
    }

}
eatPizza();

//2.
const eatPizza1 = async function () { //일반함수에서 비동기함수를 호출.
    try {
        (async () => {//이름없는 함수
            let message = await orderPizza();
            message = await makeDough(message);
            message = await setTopping(message);
            message = await bakedPizza(message);
        })();
    } catch (error) {
        console.log(error);
    }
}
eatPizza1();