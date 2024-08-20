const Account_array = require("./Account");

class MinusAccount_array extends Account {
    //대출금액 프로퍼티 추가
    //계좌 속성 초기화
    constructor(accountNumber, accountOwner, password, balance, borrowMoney) {
        super(accountNumber, accountOwner, password, balance);
        this.borrowMoney = borrowMoney; //대출 금액
    }

    //대출 금액 속성의 세터와 게터
    set borrowMoney(borrowMoney) {
        this._borrowMoney = borrowMoney;
    }
    get borrowMoney() {
        return this._borrowMoney;
    }

    //잔고 조회 메서드
    getBalance() {
        //부모거 쓰면안된다
        return super.getBalance() - this.borrowMoney//Account의 getBalance 메서드를 호출해 잔고에서 대출 금액을 차감한 값을 반환
    };

    //계좌 정보를 문자열로 반환하는 메서드
    toString() {
        return `${super.toString()}\t${this.getBalance()}`//Account의 toString메서드를 호출하여 계좌 기본 정보에 실제 잔고를 추가하여 반환
    };
}

module.exports = MinusAccount_array;