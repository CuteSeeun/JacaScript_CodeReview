//태그 이름으로 접근. 이런 메서드는 도큐먼트가 제공한다. 이게 api
const h2Element = document.getElementById("title") //트리상에 문서 자체를 의미. 아이디로 접근하겟다
console.dir(h2Element);//객체로 접근(element객체)
h2Element.style.color = "red";//color는 프로퍼티

/*
//태그 이름을 가지고 접근하고 싶다
const h2s = document.getElementsByTagName("h2");
//아이디는 유일한 것, 그래서 
console.log(h2s);
for(const element of h2s){ //유사배열은 for..of문은 가능
    element.style.backgroundColor = "yellow"; //자바스크립트에서는 카멜표기법 혹은 [식별자(이건 css속성)]를 쓴다
    // element.style["background-color"] = "yellow";
}
*/

const h2s = document.getElementsByClassName("sub_title");
//아이디는 유일한 것, 그래서 
console.log(h2s);
for(const element of h2s){ //유사배열은 for..of문은 가능
    element.style.backgroundColor = "yellow"; //자바스크립트에서는 카멜표기법 혹은 [식별자(이건 css속성)]를 쓴다
    // element.style["background-color"] = "yellow";
    //element.remove();
}
