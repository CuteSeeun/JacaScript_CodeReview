
// const execute = require("child_process").exec; //차일드 모듈 객체안에 exec라는 메서드를 가져온거다
const {exec} = require("child_process");//점 안찍고 구조분해 할당으로 가져온다
const result = exec("dir");//dir도 하나의 프로그램이라고 생각하면 된다
                            //위 코드는 dir의 문자열로 출력된 결과물이다
console.log(result);

//이벤트 기반
//stdout객체 안에서 데이터 출력하기 위해서 on(이벤트 등록)
//데이터 입력이 발생하면 위의 result결과를 여기다가 뭐시기?
result.stdout.on("data", (data)=>{ //data는 화면에 보여주고자 하는 데이터이다
    console.log(data);
});

//크롬과 주고 받을 때
spawn("C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"); //크롬을 실행