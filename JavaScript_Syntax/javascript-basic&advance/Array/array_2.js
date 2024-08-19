//각 성적을 저장하는 배열
let scores = [90, 75, 98, 78, 54];
let total= 0;//총점

//배열의 값 목록을 보여주자
for (const score of scores) { //개수만큼 인덱스를 순회한다
    if(!score) continue;
    // console.log(score);
    total += score;
}
console.log(total);
console.log(total/scores.length); //length는 배열의 원소 개수

//최고 점수 출력해보자
let max;
for (const score of scores) { //개수만큼 인덱스를 순회한다
    if (max === undefined || score > max) {
        max = score;
    }
}
console.log(max);

//위 코드에서 최고점수 최저점수 모두 출력할 수 없을까?


//--------------------------------------------------------
//쌤
let max1 = scores[0], min = scores[0];
for (const score of scores) {
    if (!score) continue;
    total += score;
    max1 = max1 < score ? score : max;
    min = min > score ? score : min;
}
console.log(total);
console.log(`최고점수${max1}`);
console.log(`최저점수${min}`);

