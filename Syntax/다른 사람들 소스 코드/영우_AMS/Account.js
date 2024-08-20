const { generateNumberModule } = require("./module/functions");

/**
 * 계좌 (입출금 전용) 클래스
 * 
 * 작성자: 조영우
 * 
 * 설명: 계좌 (입출금 전용) 을 정의하는 클래스 모듈입니다.
 */

const Account = (function () {
    return function (name, password, asset) {
        return {
            name: name,
            number: generateNumberModule(3, 4, 4, 3), // 고객 계좌번호
            password: password, // 계좌 비밀번호
            asset: asset,
            balance: asset // 예수금(잔고)
        };
    }
})();

module.exports = {
    Account,
}