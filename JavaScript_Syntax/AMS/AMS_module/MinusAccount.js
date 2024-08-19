const Account = require("./Account");

class MinusAccount extends Account {
    //대출금액 프로퍼티 추가
    constructor(accountNumber, accountOwner, password, balance, borrowMoney) {
        super(accountNumber, accountOwner, password, balance);
        this.borrowMoney = borrowMoney;
    }

    set borrowMoney(borrowMoney) {
        this._borrowMoney = borrowMoney;
    }
    get borrowMoney() {
        return this._borrowMoney;
    }

    getBalance() {
        //부모거 쓰면안된다
        return super.getBalance() - this.borrowMoney
    };
    toString() {
        return `${super.toString()}\t${this.getBalance()}`
    };
}

module.exports = MinusAccount;