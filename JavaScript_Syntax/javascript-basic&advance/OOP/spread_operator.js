//스프레드 연산자
const myDog = {
    name : "루니",
    age : 9,
    eat : function () {
        console.log("돼지입니다");
    }
};

const cat = {
    xyz : "헐"
}

//<깊은 복사>
//똑같은 강아지 하나 더 필요. 공유 아님
//에러는 안남. 근데 사이드이펙트이다. 이상하게 돌아간다
const yourDog = {myDog}; //단축 프로퍼티. 객체 안에 객체.
            //{myDog : myDog}랑 같은 코드이다.
console.log(yourDog);

const yourDog1 = {...myDog};
console.log(yourDog1);

//옛날 방식
const thatDog = Object.assign(myDog);
console.log(thatDog);

//dog와 cat을 합성
const yourDog2 = {...myDog, ...cat};
console.log(yourDog2);