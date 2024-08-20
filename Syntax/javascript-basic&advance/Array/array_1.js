//배열 선언, 생성, 초기화
let array = new Array(); //선언과 생성. 선언 및 생성할 때 new를 쓰나?
array[0] = 10; //초기화
array[1] = 20; //두번째
array[2] = 30;

//접근 (읽어오기)
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

array = new Array(10);
array = new Array(10, 20, "이쁜이", true, {name : "최세은"}); //다양한 타입들을 한 번에 담을 수 있다
console.log(array);

//new 없이 쓰기 = 리터럴 표현식
array = [10, 20, "이쁜이", true, {name : "최세은"}, ,]; //마지막 ,,는 비어있다고 나온다. (undefined로 초기화 된다)
console.log(array);
console.log(array.length);


//배열의 목록을 출력. for문으로
for (let i = 0; i < array.length; i++) { //length는 동적으로 사이즈를 확인?
    const element = array[i];
    console.log(element);//배열의 값을 순회한다
}
console.log(array["0"]); 

array.length=0; //배열의 요소들을 모두 삭제한다
console.log(array); //출력 : []

//맨끝에 담기 위해서는 
//배열에 얼만큼의 요소가 있는지 모르니깐
array[array.length] = "기요미";
console.log(array); //예측한대로 담기지 않는다. 그래서 항상 담을때마다 count값을 저장해야 한다. 그렇게 하기 불편하니 push를 사용해 담는다
array.push("최세은"); //맨 마지막에 담을 때 쓰는 메서드
console.log(array);

let count = array.unshift('거울아 거울아 세상에서 누가 제일 기엽니?');
console.log(count);
console.log(array);

array.pop();
array.shift();
console.log(array);


