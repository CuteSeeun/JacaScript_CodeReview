const { Account } = require("./Account");

/**
 * 마이너스 계좌 (대출 및 입출금) 클래스
 * 
 * 작성자: 조영우
 * 
 * 설명: 마이너스 계좌 (대출 및 입출금)을 정의하는 클래스 모듈입니다.
 */
const MinusAccount = (function () {
    return function (name, password, asset, debt) {
        // Account 생성자 함수 호출
        const baseAccount = Account(name, password, asset);

        // baseAccount의 속성을 스프레드 연산자로 복사하고 debt 속성 추가
        return {
            ...baseAccount,
            debt: debt,
            balance: asset - debt
        };
    }
})();

module.exports = {
    MinusAccount,
};