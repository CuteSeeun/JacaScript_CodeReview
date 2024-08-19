//filter, fine
let students = [
    {name : "Adams", score: 90},
    {name : "Bdams", score: 94},
    {name : "홍기정", score: 60},
    {name : "김길동", score: 93},
];
let results = students.filter((people) => { //filter메서드는 배열을 반환
                                            // 변수명, 인덱스 ,배열을 매개변수로 받는다
        if(people.score >= 90){ //필터링 조건. 무엇을 가져오고 싶은지
            return true; //90점 이상이면 true
        }
        return false;
});

//90점 이상의 학생 목록을 가져온다
console.log(results);


//find. 60점 이하의 학생이 1명이라도 
let result = students.find((people) => { 
    //조건. 60 점을 만나는 순간 그것을 반환하고 거기서 반복문을 멈춘다
    if(people.score <= 60){ 
        return true; 
        }
        return false;
});
console.log(result);

//findindex . 요소가 들어있는 순서를 찾는다

//map()
//문자열로 매핑해보자. 배열의 요소를 다른 걸로 바꾸고 싶다
const mappingStudents = students.map((people) => { return `학생 이름(${people.name}), 성적(${people.score})`; });
console.log(mappingStudents);
