//css 선택자로 돔트리상의 특정 노드 접근하기
const proffile = document.querySelector("#profile");
console.log(proffile.constructor);
console.log(proffile);

console.log(document.querySelector("h2"));

const nodeList = document.querySelectorAll("h2");

let h2 = nodeList[1];
h2 = nodeList.item(1); //하나씩 가져오기
console.log(h2);

nodeList.forEach((element)=>{
    element.style.color = "#ffff00";
});

document.querySelector("#profile img");
console.log();


const list = document.querySelector("#list");
console.log(list.children);
console.log(list.childNodes); //모든 자식들
console.log(list.childNodes[1]);
console.log(list.firstElementChild);
console.log(list.lastElementChild);
//console.log(list.parentElement.style.display="none"); //이거는 접근 후 속성들이 화면에 안 보이게 한다
console.log(list.children[1].previousElementSibling); //아직 내용 접근은 안함(자식에게 접근한건 아님). 이전 형제에 접근함
console.log(list.children[1].nextElementSibling); //이에 대한 뭐가 있는지 객체 단위로 보고싶다면 dir로 찍으면 된다

//요소의 내용 접근
// console.log(list.firstElementChild.innerHTML);
// console.log(list.firstElementChild.outerHTML);
// console.log(list.firstElementChild.textContent);


//요소 내용 수정
list.lastElementChild.innerHTML = "<b>자바스크립트";
list.lastElementChild.textContent = "<b>자바스크립트";

