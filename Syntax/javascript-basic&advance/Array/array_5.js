//배열의 주요 인스턴스(프로토타입) 메서드
const scores = [90, 80, 78, 60, 100];
const string = scores.join();
const string2 = scores.join('-');
console.log(string);
console.log(string2);


let language = "javascript,java,html,css";//기본타입
let languages = language.split(","); //기본타입이지만 메서드 목록이 뜬다 
                  //오토박싱 : 값이지만 메서드를 호출할 수 있다. 기본 타입을 박싱해서 객체로 만들어준다
                //이는 .을 찍는 순간 엔진이 이를 객체로 만들어준다
                //이는 이제 배열이 된다. 

// scores.reverse(); //보통 메서드 호출햇을때 반환값을 받앗엇는데 
// console.log(scores);//이는 이 자체가 바뀐것이라 리턴이 필요없다

//다른 세 개의 숫자를 다 합쳐보자
const neweScore = scores.concat(90, 68, 69, 60, [50, 30]); //기본 타입을 넣어도 되고 배열 자체를 넣어도 된다. 
console.log(neweScore);//그럼 새로운 배열이 생성된다. 이는 원본 배열이 바뀐게 아니다. 그래서 반환을 해줘야 한다 
//Q 그럼 concat메서드는 복새 배열인가?
/*  concat 메서드를 사용하여 새로운 배열을 만드는 것은 원본 배열을 수정하지 않고 원본 배열의 요소와
    추가된 요소들을 포함한 새로운 배열을 생성하는 것이다. 이는 

*/
//또한 scores.concat(); 를 변수에 담아야 하는 이유는?


//slice
console.log(scores.slice(0,2)); //start, end
console.log(scores.slice());


let deltedArray = scores.splice(1,2);
console.log(deltedArray);
console.log(scores);

scores.splice(1, 0, 100); //0을 줘서 삭제된 것은 없다. 
console.log(scores);


scores = [90, 80, 78, 60, 100]; //const는 객체나 배열의 속성을 바꿀 수 있는데 그게 재할당을 바꿀 수 있다는건 아니라는 얘기인가?


//100점이 있는가?
let index = scores.indexOf(100); //있는지 없는지 조회
                                 //왜 변수에 담는데?
if (index < 0){
    console.log("100점은 없다");
}else{
    console.log(scores.slice(index, index+1)); //인덱스로 접근하기
}


//배열에 들어잇는 존재 여부
let exist = scores.includes(100);
console.log(exist);

const sum = function () {
    // console.log(arguments);
    //유사배열을 찐배열로 변환
    const nums = Array.from(argumets); //형변환. from에 진짜 배열을 줘도 된다
    let sum = 0;
    for (const num of nums) {
        sum += num;
    }
    return sum;
}
console.log(sum(1,2,3,4,5)); 



