
/**
 * 계좌번호 자동 생성기
 * 
 * 작성자: 조영우
 * 
 * 설명: 계좌번호 자동 생성기, 클로저를 사용하여 구현
 */
const generateNumberModule = (function () {
    return function (...interHypens) {
        let numberArr = [];
        //Error Detection
        for (const interHypen of interHypens) {
            if (interHypen <= 0) {
                throw new Error("InterHypen의 갯수로 자연수가 아닌 값을 입력하셨습니다.");
            }
        }
        //Core Algorithm
        for (const length of interHypens) {
            let number = "";
            for (let i = 0; i < length; i++) {
                number += Math.floor(Math.random() * 10);
            }
            numberArr.push(number);
        }
        //return [String]
        return numberArr.join("-");
    }
})();

module.exports = {
    generateNumberModule,
}