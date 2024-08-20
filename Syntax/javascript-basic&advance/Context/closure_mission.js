//클로저 함수
//나
/*
const counter = function (number, callback) {
    //클로저 반환
    //콜백 함수와 클로저를 활용해 증가와 감소가 되도록 만들어보자 (통로가 두 개)
    //증가시키고 감소시키는 것은 어떻게 처리하는가는 콜백 함수임. 
    //counter함수는 콜백함수를 받도록 한다
    //콜백함수를 통해 증가 및 감소를 시켜보자.
    let count = number; 
    return function () {
    count = callback(count); 
    return count;
    };
}

function result(count) {
    if (count >= 15) {
        return --count;
    } else {
        return ++count;
    }
}

const myCounter = counter(3, result);

console.log(number);
console.log(`들어온 값 : ${number}`);
console.log(result());
console.log(result());
console.log(result());
console.log(result());
*/

//------------------------------------------------------
//선생님
/*
function counter(fn) {
    let count = 0;
    return function () {
        count = fn(count);
        return count;
    };
}
const increase = function (number) { //외부에서 증가
    return ++number;
}
const decrease = function (number) { //외부에서 감소
    return --number;
}

const increaser = counter(number => ++number); //이 함수와 55번째줄 counter함수는 서로 별개이다. 실행 컨텍스트가 별개이다. 실행 컨텍스트는 호출때마다 생긴다. 근데 이제 이 함수와 55번째 함수를 똑같은 함수로 처리해보자
console.log(`증가 후 카운트 : ${increaser()}`);
console.log(`증가 후 카운트 : ${increaser()}`); 
console.log(`증가 후 카운트 : ${increaser()}`); 

const  decreaser = counter(number => --number);
console.log(`감소 후 카운트 : ${decreaser()}`); //-1이 왜 나오는지 이해햇는가?
*/

//--------------------------------------------------------------------
//수정 힌트
//위를 수정해보자.
//위는 다른 컨텍스트를 쓴다
//하나의 컨텍스트만을 쓰도록 고정해야 하는데 
//counter는 한번만 실행시키도록 한다. 
// const closure= (counter())(); //클로저를 만들었고 증가시키고 감소시키는 것은 38번째줄 function()에 콜백함수를 인자로 받는다.
                              //즉 클로저를 호출해서 클로저에게 콜백을 줘야하는 것이다


//---------------------------------------------------------------------
//나
//클로저 안에 콜백을 넣어서 수정

/*
function counter(fn) {
    let count = 0;
    return function () {
        count = fn(count);
        return count;
    };
}
const increase = function (number) { //외부에서 증가
    return ++number;
}
const decrease = function (number) { //외부에서 감소
    return --number;
}

counter(increase);
counter(decrease);

const increaser = counter(number => ++number); 
console.log(`증가 후 카운트 : ${increaser()}`); 
console.log(`증가 후 카운트 : ${increaser()}`); 

const  decreaser = counter(number => --number);
console.log(`감소 후 카운트 : ${decreaser()}`);
*/

// const closure= (counter())();



//------------------------------
//준경TR

const counter1 = function () { //여기에 fn을 받아도 되는 이유. <- 이는 일반 함수가 콜백을 받는것
                               //return function()여기에 받아도 되는 이유.  <- 이는 클로저가 콜백 함수를 받는것
                               //function counter(fn) 이렇게 써도 됨
    let count = 0;
    return function (fn) {
        count = fn(count); 
        return count;
    }
}

const increase1 = function (num) {
    return ++num;
}

const decrease1 = function (num) {
    return --num;
}

const myCounter = counter1()
//const increaser = counter ((number) => {return ++number});  위 말고 이렇게 써도 됨
//const increaser = counter (number => ++number); 이는 위 코드를 단축시킨거
console.log(myCounter(increase1)); //위의 코드 처럼 쓰면 console.log(increaser()); 이렇게 써야 한다.
console.log(myCounter(increase1));
console.log(myCounter(decrease1));
console.log(myCounter(decrease1));
console.log(myCounter(decrease1));

//const decreaser = counter(number => --number); //이는 위의 주석처리된 코드와 다른 실행 컨텍스트를 가진다
//console.log(decreaser());

//------------------------------------------------------
//최종 수정
//클로저도 함수인데 한 클로저를 쓰도록 해보자
//하나의 클로저를 받아서 클로저에게 콜백을 주자. 일반 함수가 콜백을 받지 말고
function counter () {
    let count = 0;
    return function (fn) {
        count = fn(count);
        return count;
    };
}

const closure = counter();        //콜백 함수를 받아놓음. counter()를 호출해서 함수를 받는다.
let count = closure((count)=>{    //let count = closure (count => ++count);로 써도 됨
    return ++count;  
}); //화살표 함수 ()=>{}
console.log(count);
console.log(closure(count => ++count));
console.log(closure(count => ++count));
console.log(closure(count => --count));
console.log(closure(count => --count)); 
console.log(closure(count => count * 5));
//만약 +,-를 인자로 받는다고 하면 그것밖에 못하는데 이렇게 쓰면 곱하기, 나누기 모두 쓸 수 있게 된다. 
//이런게 고차함수.. : 어떤걸 받아도 가능한 함수 -> 클로저를 쓰는 이유
//고차함수는 어떤 기능을 쓸지 모르겠는데 그때 그때 기능을 정한다는 것.


//-----------------------------------------------------------
//즉시 실행 함수로 바꿔보기 : 만들자마자 즉시 컨텍스트에 올리기
(function counter () {
    let count = 0;
    return function (fn) {
        count = fn(count);
        return count;
    };
})(); //이렇게 하면 바로 호출되서 메모리에 올라간다.그러면 클로저가 호출된다.
       //외부에서 언제든지 클로저를 쓸 수 있다. 이걸 모듈 때 쓴다. 이처럼 독립적으로 만들어서 클로저를 exports 시켜
       //만들때 실행도 되도록 한다.
    
let count1 = closure(count => ++count);
console.log(closure(count => ++count));







