//은행 계좌 생성자 함수
//생성자도 const로 시작하는 것이 좋은 습관이다.
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
