/*
//입출금 계좌
class Account {
    //setter / getter 

}

//마이너스 계좌
class MinusAccount extends Account {
    //대출금액 프로퍼티 추가
    //setter / getter 

    //toString() 재정의
    //getBalance() 재정의 
}


const Account = function (accountNumber, accountOwner, password, balance ) { //생성자 템플릿 만들기
    this.accountNumber = accountNumber; //this의 account랑 매개변수 account는 다른거다
    this.accountOwner = accountOwner;
    this.password = password;
    this.balance = balance;
    this.checkPassword = function(password) {
        return this.password === password;
    },
    this.deposit = function (money) {
        return this.balance += money;
    },
    this.withdraw = function (money) {
        return this.balance -= money; //return안쓰면 undefined
    },
    this.getBalance = function () {
        //현재 잔액 얼마인지 보여주는
        return this.balance;
    },
    this.toString = function () {
        return `${this.accountNumber}\t${this.accountOwner}\t${this.balance}\t****`;
    }
} 

//고객으로부터 입력받은 고객 정보
let name = "김기정";
let passwd = 1234;
let number = "1111-2222";
let money = 1000;
const account = new Account(number, name, passwd, money);

const ok = account.checkPassword();
if(ok) {
    let balance = account.deposit(1000);//입금 기능 테스트
    console.log(`입금 후 잔액 : ${balance}`);
    balance = account.withdraw(1000);//출금 기능 테스트
    console.log(`출금 후 잔액 : ${balance}`);
    //계좌 모든 정보 출력
    console.log(account.toString());
} else {
    console.log("비밀번호가 일치하지 않습니다.");
}
account.deposit(1000); 

// account의 타입이 궁금할때, 누구에게로부터 만들어졋는가
console.log(account.constructor); //출력 : [Function: Accout]
if (account.constructor === Accout) {
    console.log(console.log("Account로부터 생성된 인스턴스이다."));
}

//생성자 함수를 통해 객체를 1개 만든다고 해보자
//object 생성자를 이용해서 만들기
const teacher = new Object (); //미리 만들어져 잇는 생성자 함수
                              // const teacher = {} 이 코드와 똑같다.
teacher.name = "김기정";
teacher.age = 10;
teacher.doTeaching= function () {
    console.log("강사님입니다");
}
/*

//---------------------

*/

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
    get accontOwner() {
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
    checkPassword(password) { //get이 실행
        return this.password == password;
    };
    deposit(money) {
        return this.balance += money;
    };
    withdraw(money) {
        return this.balance -= money;
    };
    getBalance() {
        return this.balance;
    };
    toString() {
        // return `${super.to}`
        return `${account.accountNumber}\t${account.accountOwner}\t${account.balance}`

    }
}

//테스트 입출금 계좌 생성
const account = new Account('111-222', "김기정", 1234, 10000);
console.log(account.accountNumber);
console.log(account.accontOwner);
console.log(account.password);
console.log(account.balance);
account.deposit(10000);
account.withdraw(5000);
console.log(account.getBalance());

//마이너스 계좌
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

//테스트
const minusAccount = new MinusAccount("222-333", "김대출", 1234,);
console.log(minusAccount.accountNumber);
minusAccount.deposit(10000);
minusAccount.withdraw(5000);
console.log(minusAccount.getBalance());
console.log(minusAccount.toString());





