//은행 계좌 모듈 처리
const AccountError = require("./AccountError");

class Account_array {
    //계좌 속성 초기화
    constructor(accountNumber, accountOwner,password, balance) {
        this.accountNumber = accountNumber; //계좌번호 //이 코드는 set의 accountNumber을 실행한다 (그냥 속성을 set의 _식별자에 저장하는 것을 말하는거 같다)
        this.accountOwner = accountOwner; //계좌 소유자
        this.password = password; //비밀번호
        this.balance = balance; //잔고
    }

    //계좌 번호 속성의 세터와 게터
    set accountNumber(accountNumber) {
        this._accountNumber = accountNumber; //언더바를 빼면 덮어쓰게 되는건가? 이건 재선언인가 재할당인가
    }
    get accountNumber() {
        return this._accountNumber;
    }

    //계좌 소유자 속성의 세터와 게터
    set accountOwner(accountOwner) { //접근 불가능하게 만들려면 set을 안 만들면 된다.
        this._accountOwner = accountOwner;
    }
    get accountOwner() {
        return this._accountOwner;
    }

    //비밀번호 속성의 세터와 게터
    set password(password) {
        this._password = password;
    }
    get password() {
        return this._password;
    }

    //잔고 속성의 세터와 게터
    set balance(balance) {
        this._balance = balance;
    }
    get balance() {
        return this._balance;
    }

    //인스턴스 메서드
    //비밀 번호 확인 메서드
    checkPassword(password) { //get이 실행
        return this.password == password;
    };

    //입금 메서드
    deposit(money, password) {
        if (password !== this.password){
            throw new AccountError(100, "비밀번호를 다시 확인해주세요");
        }
        return this.balance += money;
    };

    //출금 메서드
    withdraw(money, password) {
        if (password !== this.password) {
            throw new AccountError(100, "비밀번호 오류");
        }
        if (this.balance < money) {
            throw new AccountError(200, "잔액 부족")
        }
        return this.balance -= money;
    }

    //잔고 조회 메서드
    getBalance() {
        return this.balance;
    };

    //계좌 정보를 문자열로 반환하는 메서드
    toString() {
        // return `${super.to}`
        return `계좌번호:${this.accountNumber}\t소유자:${this.accountOwner}\t비밀번호:****\t잔고금액:${this.balance}`
        //account. 에서 this.으로 수정한 이유 : 
        //메서드가 인스턴스의 속성에 접근해야 하기 때문이다. this는 현재 인스턴스를 참조한다.
        //account.라는 변수가 존재하지 않아서 오류 난다.
        //따라서 toString 메서드에서 this키워드를 사용해 현재 인스턴스의 속성에 접근하도록 수정해야 한다
    }
}

const account = new Account_array("1111", "홍길동", 1234, 1000);
try {
    account.withdraw(100000, 1234);
} catch (error) {
    console.log(error.toString()); // [200] : 잔액 부족
}

//여기서 모듈을 내보냅니다
module.exports = Account_array;