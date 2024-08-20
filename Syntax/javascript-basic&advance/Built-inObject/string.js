//String객체 _ 생성자 함수

const message = "JavaScript"; //아직 기본타입
const messageObj = new String(message); //기본타입을 포장해서 객체로 만듦. String은 생성자 함수
console.log(messageObj.length);

//문자열 중에서 Java만 가져와야 한다면
console.log(messageObj.substring(0, 4)); //처음 인덱스는 0, 마지막 인덱스는 4. 그리고 맨 마지막 인덱스는 제외이다.
console.log(messageObj.slice(0,4)); //위와 같은 기능을 하는 메서드이다


//AutoBoxing _ .찍으면 객체로 바뀐다
message.substring(0,4); //이 기본 타입은 값만 있는데 . 찍으면 객체가 된다 즉 인스턴스가 알아서 만들어진다
console.log(message.substring(0,4)); //이 코드가 끝나면 원래 기본 타입으로 바뀐다


//주민번호 뒷자리 앞번호까지 가져와야 한다면 _ charAt()로 쓰고 indexOf로 바꿔보기
const ssn = "68031-1234567"; 
const index = ssn.indexOf("-");
const char = ssn.charAt(index + 1); //원래 index가 아니라 6이라고 썼는데 바로 위 코드를 추가하고 이렇게 수정했다 왜?
switch (ssn.charAt(ssn.indexOf("-") + 1)) { //(char) 원래 이렇게 썼음
    case "1": console.log("2000년 이전 출생 남자");break;
    case "2": console.log("2000년 이전 출생 여자"); break;
    case "3": console.log("2000년 이후 출생 남자");break;
    case "4": console.log("2000년 이후 출생 여자");break;
    default: console.log("외국인입니다"); break;
}

//concat은 연결 _ 문자열이 계속 연결된다
//원래 배열의 concat은 배열과 배열을 합친다
//indexOf()

//includes는 있으면 true, 없으면 false
console.log(message.includes("Script")); //Script로 쓰면 true, script로 쓰면 false 
console.log(message.includes("script"));
//만약 대소문자를 구분 안 하겠다고 하면 한쪽을 대문자로 혹은 소문자로 바꾼다
console.log(message.toUpperCase().includes("SCRIPT")); //이는 대문자로 변환된 string을 받는다


console.log("김기정 바보".includes("바보")); //출력 : true


//객체를 기본 타입으로 바꾸기 _ valueOf()
console.log(typeof messageObj.valueOf()); //바꾼 후 typeof으로 타입 검사해보기
//valueOf는 언제 쓸까? 
console.log(Number("10".valueOf()) + 20); //valueOf : 객체를 받았는데 기본타입으로 바꿀 때 쓴다
//형변환이 필요할 때 이렇게 쓰면 된다.


//스페이스(공백)를 제거
const text = "     김기정입니다. "; 
console.log(text);
console.log(text.trim()); //trim 메서드는 앞뒤 공백을 제거해준다
console.log(text.trimStart());
text.trim(text.trimEnd())