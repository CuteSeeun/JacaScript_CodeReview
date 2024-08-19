console.log(window);

//윈도우 생략 가능
const string = new window.String("11111");
window.console.log("헐...");


//대표적인 프로퍼티
console.log(innerWidth);
console.log(innerHeight);

//대표적인 메서드 (전역함수)
// open();//창 열기
// close();//창 닫기

// alert("졸리다");//화면에 보여주고 싶은 메세지

// const resutl = confirm("밥 먹엇삼?");
// console.log(resutl);

// const age = prompt("당신은 몇 살인가요", 10);
// console.log(typeof age, age);

// const input = prompt("단을 입력하세요", 2);
// printGugudan(parseInt(input));

// const pop = open("hello.html", "pop");
// console.log(pop);
// if(!pop){
//     alert("팝업 차단 해제");
// }
// pop.close();

//SweetAlert 라이브러리 사용하기(필요할 때 함수 호출하듯이 쓰면 된다)
Swal.fire({
    title: "Custom width, padding, color, background.",
    width: 600,
    padding: "3em",
    color: "#716add",
    background: "#fff url(/images/trees.png)",
    backdrop: `
      rgba(0,0,123,0.4)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `
  });