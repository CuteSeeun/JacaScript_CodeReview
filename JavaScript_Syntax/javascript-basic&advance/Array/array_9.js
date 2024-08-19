//reducce
let students = [
    {name : "Adams", score: 90},
    {name : "Bdams", score: 94},
    {name : "홍기정", score: 60},
    {name : "김길동", score: 93},
];

//합을 누적하는 변수
let total = 0;
//요소 값이 들어올 때 total 변수에 누적시키자. forEach는 리턴 없다
students.forEach( (people) => { 
    total += people.score;
});
console.log(total);
//여기서 forEach를 쓰면 total이라는 변수를 만들어야 한다


//reduce
const result = students.reduce( (acc, people) => {
    return acc + people.score;
}, 0); //위에적 total을 0으로 초기화 한 것을 이렇게 적는다 
console.log(result);

//위 학생들의 최고 점수를 만들어보자
//최고점수
const max = students.reduce( (accumulator, student) => {
    return student.score > accumulator ? student.score : accumulator; 
}, 0);
console.log(`최고점수 : ${max}`);

//최저점수????
let min = students.reduce( (accumulator, student) => {
    return student.score < accumulator ? student.score : accumulator;
}, students[0].score);
console.log(`최저점수 : ${min}`);