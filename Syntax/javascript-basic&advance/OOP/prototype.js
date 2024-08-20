//생성자는 데이터만 (초기화시키는 데이터)
const Account = function (accountNumber, accountOwner, password, balance ) { //생성자 템플릿 만들기
    this.accountNumber = accountNumber; //this의 account랑 매개변수 account는 다른거다
    this.accountOwner = accountOwner;
    this.password = password;
    this.balance = balance;
} 

//Account 프로토타입 객체의 메서드로 추가(student가 가리키는)
//기능은 프로토타입 객체에 
Account.prototype.checkPassword = function(password) {
    return this.password === password;
}, //account가 가리키는 프로토타입 안에 비어잇는데 checkPassword라는 메서드 추가한거다.

Account.prototype.deposit = function (money) {
    return this.balance += money;
},
Account.prototype.withdraw = function (money) {
    return this.balance -= money; //return안쓰면 undefined
},
Account.prototype.toString = function () { 
    return `${this.accountNumber}\t${this.accountOwner}\t${this.balance}\t****`;
}
Account.prototype.xyz = function () { //모든 인스턴스는 이 기능을 쓸 수 있다.
    console.log("xyz");
}


console.log("프로그램 시작됨...");

const account = new Account("1111-2222", "김기정", 1234, 10000);
const restMoney = account.deposit(10000);
console.log(restMoney);
console.log(account.toString()); //실제 account의 생성자를 사용하는 게 아니라는데...?
account.xyz(); //출력 : xyz

//in연산자와 같은 기능의 메서드 재사용
//Object의 prototype 객체가 제공하는 기능 재사용
const exist = account.hasOwnProperty("password"); //password 프로퍼티가 있는지 확인? 
console.log(exist);


//모두 object의 자식이다
const xxxx = {

}
xxxx.hasOwnProperty();