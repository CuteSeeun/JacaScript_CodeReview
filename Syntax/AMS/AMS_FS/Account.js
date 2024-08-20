// 입출금 계좌
class Account {
    constructor(number, name, password, balance) {
        this.number = number;
        this.name = name;
        this.password = password;
        this.balance = balance;
    }
    set password(password) {
        this._password = password;
    }
    get password() {
        return this._password;
    }
    toString() {
        return `계좌번호 : ${this.number}\t    성함 : ${this.name}\t   잔고 : ${this.balance}`
    }
    deposit(money) {
        this.balance += money;
        return `${money}원이 입금되었습니다. 현재 잔액은 ${this.balance}원입니다.`;
    }
    withdraw(money) {
        let result = "";
        if (this.balance >= money) {
            this.balance -= money;
            result = `${money}원이 출금되었습니다. 현재 잔액은 ${this.balance}원입니다.`
        }
        else {
            result = "계좌의 잔액이 부족합니다.";
        }
        return result;
    } 
    getBalance = function () {
    return this.balance;
    }
}

module.exports = Account;