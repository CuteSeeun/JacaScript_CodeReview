// 마이너스 계좌
const Account = require("./Account")

class MinusAccount extends Account {
    constructor(number, name, password, balance, loan) {
        super(number, name, password, balance);
        
        // 대출금액 프로퍼티 추가
        this.loan = loan;
    }
    // toString() 재정의
    toString() {
        if (this.loan > 0) {
            this.balance -= this.loan;
            return `${super.toString()}\n해당 계좌는 마이너스 계좌로 ${this.loan}원을 대출중입니다.`;
        } else {
            super.toString()
        }
    }
    // getBalance() 재정의
    getBalance() {
        return this.balance - this.loan;
    }
}

module.exports = MinusAccount;