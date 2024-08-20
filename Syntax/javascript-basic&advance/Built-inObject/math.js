//Math 객체 _ 생성자 함수가 아니라 그냥 객체
console.log(Math.constructor);
/* const Math = {}; 이렇게 미리 만들어져 있는 객체이다 */

console.log(Math.PI); //원주율
console.log(Math.E);

//절대값
console.log(Math.abs(-10));
console.log(Math.round(130.56));
console.log(Math.max(5, 3, 56, 100));

console.log(Math.ceil(125.36)); //무조건 올림
console.log(Math.floor(125.66));//무조건 내림

console.log(Math.sqrt(Math.pow(10, 2) + Math.pow(10, 2) )); //10의 2승 + 10의 2승의 루트값


//랜덤 _ 실수
console.log(Math.random()); //실행할 때마다 임의의 값이 출력된다
//로또번호를 랜덤하게 찍고 싶다 1 ~ 45
//랜덤은 실수이고 로또번호는 정수이니깐 곱하기를 하고(10) 소수점 밑을 버린다
const randomLotto = function() {
    //0~1 사이의 실수를 생성 후
    //45로 곱하고 1을 더한 후 정수로 변환한다
    //소수점 아래를 버리기 위해 Math.floor함수를 사용한다
    //중복되지 않은 7개의 숫자를 생성한다
    const lottoNumbers = new Set(); 
    while (lottoNumbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        lottoNumbers.add(randomNumber);
    }
    return Array.from(lottoNumbers);
}
let nums = randomLotto();
nums.forEach( (num) => {console.log(num);} );

//선생님 코드
const randomLotto1 = function () {
    const nums = [];
    for (;nums.length < 6;) { //while문과 동일
        let num = parseInt((Math.random() * 45) + 1);
        if (!nums.includes(num)) {
            nums.push(num);
        }
    }
    return nums;
}

nums = randomLotto1();
//오름차순 정렬
nums = nums.sort( (pre, next) => {
    return pre - next;
});
//순차적으로 출력
for(let i =0; i < 6; i++) {
    setTimeout( () => {
        process. stdout .write(nums[i] + "\t");
    }, 1000 * i);
}