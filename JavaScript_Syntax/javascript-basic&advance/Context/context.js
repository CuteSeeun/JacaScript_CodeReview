//전역
var globalMessage1 = "전역 메시지";
let globalMessage2 = "전역 메시지2";

//어떤 식별자가 있는지만 검사한다 : 평가 단계

function printMessage () {             //평가 단계. printMessage()는 var처럼 되서 글로벌에 저장된다.
    //여기서부터 새로운 실행 환경이 만들어졋기에 다시 평가 단계가 이루어진다.
    //여기에 선언된 애들은 선언 후 나중에 가비지 컬렉션이 수거해간다.
    let localMessage = "지역 메시지"; //이는 declare에 선언된다.
    console.log(globalMessage1);
    console.log(globalMessage2);
    console.log(localMessage); 

    // 중첩 함수를 만든다면 어떻게 될까
    
        //함수 만들 때 선언식보다 표현식을 권장하는 이유 ? : var처럼 동작되기 때문에? 
        //                                                함수가 전역에 만들어지면 프로그램 끝날때까지 삭제되지 않는다.  
        //                                                그래서 declare에 선언되도록 하는게 좋다는거다
        const innerFunction = function () {
            let some = "썸";
            console.log(some);
            console.log(localMessage);
        }
        innerFunction(); 
        //여기에 스택에 실행컨텍스트가 몇 개 쌓일까 : 3개 _ 전역/함수/함수
}

console.log(globalMessage1);
console.log(globalMessage2);

printMessage(); 

const user = {
    name : "김기정",
    sayHello : function () {
        console.log(this.name);
    }
};
user.sayHello();
//함수 단위로 실행컨텍스트가 만들어진다. 
//스택에는 전역 컨텍스트와 printMessage();때문에 함수 실행 컨텍스트가 만들어진다
//

