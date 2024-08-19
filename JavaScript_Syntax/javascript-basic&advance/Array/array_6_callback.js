//고차 함수들
//forEach()
const nums = [54, 545, 34, 56, 7, 8];
nums.forEach((num) => {
    console.log(num);
}); //이 함수는 반복문이 암시적으로 내부적으로 구현되어 있다.
                //내가 하고 싶은걸 콜백 함수로 전달해주면 된다 () => {}
                //화살표 함수 구조 : num은 매개변수 
/* 이 코드에서 배열을 순회할 때 외부에서 num을 주는데
    num이 선언 및 초기화가 안되어 있는데 순회하면서 배열의 각 요소를 
    num으로 할당하는 거다. 
    즉 forEach 메서드에서 사용하는 
*/


//원본 배열 고치기
const number = [12, 25, 36, 80, 55];
number.forEach(num => console.log(num)); //배열을 순회하면서 각 요소를 출력
number.forEach((num, index, array) => { //세 개의 매개변수를 받는다
    array[index] = num * 2;
});
console.log(number);


//위 코드를 정렬해보자
//sort()
number.sort(); //원본 배열이 바뀐다 그리고 정렬된 것을 반환받는다.
              //이를 출력 시 숫자여도 내부적으로 문자열로 바뀌어 정렬된다
              //예) 108, 112, 14, 16, 68, 90
              //그래서 정렬 기준을 내가 콜백으로 전해줘야 한다.
//기준을 잡아서 정렬시켜보자.
number.sort((x,y) => {
    return x - y; //오름차순 정렬
});
console.log(number);


//내림차순 정리?
let students = [
    {name : "Adams", score: 90},
    {name : "Bdams", score: 94},
    {name : "홍기정", score: 60},
    {name : "김길동", score: 93},
];

//오름차순은 그냥 sort하면된다
students.sort(); //원본 배열이 바뀐다
console.log(students); //문자열이면 오름차순 정렬이 되는데 객체라서 오름차순 정렬이 안된다
//객체를 내림차순 정렬 해보자 _ 콜백을 주자
students.sort((student1, student2) => {
    return student2.name.charCodeAt(0) - student1.name.charCodeAt(0) //student2의 이름의 문자열의 0번째 인덱스
    //여기서 return 안써서 위의 students가 출력되서 정렬이 되지 않았다.
});
console.log(students);