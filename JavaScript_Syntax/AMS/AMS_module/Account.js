//은행 계좌 모듈 처리
class Account {
    constructor(accountNumber, accountOwner,password, balance) {
        this.accountNumber = accountNumber; //이 코드는 set의 accountNumber을 실행한다 (그냥 속성을 set의 _식별자에 저장하는 것을 말하는거 같다)
        this.accountOwner = accountOwner;
        this.password = password;
        this.balance = balance;
    }
    set accountNumber(accountNumber) {
        this._accountNumber = accountNumber; //언더바를 빼면 덮어쓰게 되는건가? 이건 재선언인가 재할당인가
    }
    get accountNumber() {
        return this._accountNumber;
    }
    set accountOwner(accountOwner) { //접근 불가능하게 만들려면 set을 안 만들면 된다.
        this._accountOwner = accountOwner;
    }
    get accountOwner() {
        return this._accountOwner;
    }
    set password(password) {
        this._password = password;
    }
    get password() {
        return this._password;
    }
    set balance(balance) {
        this._balance = balance;
    }
    get balance() {
        return this._balance;
    }

    //인스턴스 메서드
    checkPassword(password) { //입력된 비밀번호와 계좌의 비밀번호를 비교
        return this.password == password;
    };
    deposit(money) { //입금할 금액을 잔고에 추가
        return this.balance += money;
    };
    withdraw(money) {//출금할 금액을 잔고에서 차감
        return this.balance -= money;
    };
    getBalance() {//현재 잔고를 반환
        return this.balance;
    };
    toString() {//계좌번호, 계좌 소유자, 잔고를 문자열로 반환
        // return `${super.to}`
        return `${this.accountNumber}\t${this.accountOwner}\t${this.balance}`
        //account. 에서 this.으로 수정한 이유 : 
        //메서드가 인스턴스의 속성에 접근해야 하기 때문이다. this는 현재 인스턴스를 참조한다.
        //account.라는 변수가 존재하지 않아서 오류 난다.
        //따라서 toString 메서드에서 this키워드를 사용해 현재 인스턴스의 속성에 접근하도록 수정해야 한다
    }
}

//여기서 모듈을 내보냅니다
module.exports = Account;