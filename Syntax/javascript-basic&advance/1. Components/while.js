console.log('JavaScript!!');

let count = 1;
while(count <= 5){
    console.log('yum');
    count++;
}

index = 1;
let sum = 0;
while (index <= 100) {
    sum += index;
    index++;
}
console.log(sum); 

//1부터 100가지 짝수의 합만 구해보자 _ 나
let n = 2;
while (2*n <= 100) {

    n++;
}
console.log("1~100까지 짝수 합 = ");

//console.log("1~100까지 홀수 합 = ");
//console.log("1~100까지 짝수 합 = ");

//Hint) 나머지 연산자(%) 활용하여 홀수, 짝수 판별
index = 1;
let oddSum = 0, evenSum = 0;
while (index <= 100) {
    if((index % 2) === 0){
        evenSum += index;
    }else{
        oddSum += index;
    }
    //(index % 2) === 0 ? evenSum += index : oddSum += index;
    index++;
}
console.log("1~100까지 홀수 합 : " + oddSum);
console.log("1~100까지 짝수 합 : " + evenSum);
console.log("1~100까지 총합 : " + (oddSum + evenSum));

//do while문으로 일렬로 찍어보기
let stars = 5;
do {
    process.stdout.write("*");
    stars--;
} while (stars > 0);

