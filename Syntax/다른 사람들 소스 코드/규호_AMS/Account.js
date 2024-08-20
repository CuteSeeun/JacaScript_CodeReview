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
        return `[사용자 정보] 성함 : ${this.name}\t| 계좌번호 : ${this.number}\t| 잔고 : ${this.balance}`
    }
    deposit(money) {
        this.balance += money;
        return `[입금] : ${money}원이 입금되었습니다. 현재 잔액은 ${this.balance}원입니다.`;
    }
    withdraw(money, password) {
        result = 0;
        if (password === this.password) {
            result = "[로그인 성공] : 비밀번호가 확인되었습니다.";
            if (this.balance >= money) {
                this.balance -= money;
                result = `[출금] : ${money}원이 출금되었습니다. 현재 잔액은 ${this.balance}원입니다.`
            }
            else {
                result = "[잔액 부족] : 계좌의 잔액이 부족합니다.";
            }
        } else {
            result = "[로그인 실패] : 비밀번호를 다시 확인해주세요."
        }
    }
    getBalance = function () {
        return this.balance;
    }
}

module.exports = Account;