
//다차원 배열
const classes = new Array(10);

//접근하는 방식----------------------------------------------
//1반에 20명의 성적을 저장할 공간이 필요하다
classes[0] = new Array(20);//첫번째 인덱스에 20개 크기의 배열을 다시 만든다
classes[1] = new Array(25); //얘는 참조의 참조이다. 다른 언어랑 다르다

//첫 번째 원소에 점수(값)들을 저장해보자. 어떻게 접근해야하는가
classes[0][0] = 50; //첫 번째 인덱스의 첫 번째 요소가 0이 된다.
classes[0][1] = 60;

classes[0][classes[0].length]//classes의 0번재 배열에. 이건 뭐지?
classes[0][19] = 100;

//반별로 점수 목록을 출력해보자
//중첩 for문을 해보자
for (const scores of classes) { //루프돌면서 배열이 전달된다. 즉 성적 목록이 들어잇는거다. 
    console.log(scores); //출력 : 배열을 찍은거다. 
}
//-----------------------------------------------------------------


//동적인 데이터를 넣어보자. 일반 for문으로. 가상의 점수 등록
for (let i = 0; classes.length; i++) { 
    //배열을 돌았으니 각 인덱스에 새로운 점수 배열을 넣자
    classes[i] = new Array(20); //배열에 배열을 담음
}
//목록 출력
for (const scores of classes) {
    //배열이 출력되지 않고 점수가 출력되도록
    for (const score of scores) {
        console.log(score);
    }
    console.log();
}
//이는 무한반복 된다. 이를 밑의 코드처럼 수정해보자 (실제 값 넣어서)



//------------------------------------------------------------
/*  Q에 대한 답
    
*/
//------------------------------------------------------------


//가상의 값을 넣고 해보자
const classes2 = [ //이차원 배열
    [90, 67, 88, 56, 90],
    [90, 67, 88, 56, 90],
    [90, 67, 88, 56, 90],
    [90, 67, 88, 56, 90],
];
//목록출력
for (const scores of classes2) {
    for(let i = 0; i<scores.length; i++) {
        console.log(scors[i]);
        process.stdout.srite(scores[i] + ", "); //process.stdout은 문자열을 넣어줘야 해서 값을 문자열로 바뀌도록 한다.
    }
    console.log();
}
//i값이 필요하면 일반 for문 필요없으면 for..of문 쓰기












//위 코드를 수정해보자
const classes3 = [ //이차원 배열
    [90, 67, 88, 56, 90],
    [90, 67, 88, 56, 90],
    [90, 67, 88, 56, 90],
    [90, 67, 88, 56, 90],
];
//목록출력 _ 두개 다 일반 for문 왜?
for (let i = 0; i < classes3.length; i++) {
    console.log(`${i + 1}반`);
    

    let total =0
    const scores4 = classes3[i]
    for (const score of scores4 )
    {
        process . stdout. write(score + ", ");
        total += score;
    }
    console.log();
    console.log(`반 총점 : ${total}, 반 평균 : ${}`);



    for(let j=0; j < classes3[i].length; j++) {
        process.stdout.write(classes3[i][j] + ", "); //process.stdout은 문자열을 넣어줘야 해서 값을 문자열로 바뀌도록 한다.
    }
    console.log();
}