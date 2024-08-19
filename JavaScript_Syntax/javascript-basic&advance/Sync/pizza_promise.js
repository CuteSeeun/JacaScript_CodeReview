//각 단계를 함수로 만들고 그 안에 프로미스 쓰고 마지막에 프로미스 체이닝을 쓴다
//q. 왜 프로미스 만들고 안에 함수를 만들면 안되는가 프로미스는 콜백함수인가?

//비동기 함수 4개 
//피자 주문
const orderPizza = function() {
    return new Promise((resolve, reject)=>{
        resolve("피자가 주문 되었습니다");
    });
}
//도우 만들기
const makeDough = function(message) {
    console.log(message);
    return new Promise((resolve, reject)=>{
        resolve("피자 도우를 만들었습니다");
    });
}
//토핑 만들기
const setTopping = function(message) {
    console.log(message);
    return new Promise((resolve, reject)=>{
        resolve("피자 토핑을 완성했습니다");
    });
}
//굽기
const bakedPizza = function(message) {
    console.log(message);
    return new Promise((resolve, reject)=>{
        resolve("피자 굽기가 완성되었습니다");
    });
}

//피자 주문만 바닺
orderPizza() //이 함수는 일단 프로미스 자체를 반환
    .then((message)=>{console.log(message);}) //then은 콜백함수를 지정
//.then(message => console.log(message))
//.then(console.log); //log함수는 내가 만들지 않아도 그냥 log을 콜백으로 준거다. 
//q. 근데 log함수는 매개변수를 안받앗는데 무엇을 호출하누
    .then(makeDough)//콜백 함수로 makeDough를 준다 _ 이는 함수 자체를 직접 넣은게 아니라 함수 참조를 넘겨주는거다.
                     //q.자기 자신을 콜백해준건가?
    .then(setTopping)
    .then(bakedPizza)
    .then(console.log) //출력 : 피자 굽기가 완성되었습니다