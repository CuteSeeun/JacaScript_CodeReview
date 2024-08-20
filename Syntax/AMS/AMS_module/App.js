//애플리케이션의 엔트리포인트(실행 진입점) 역할 파일
//account 생성해서

// const account = new Account();
// console.log(account.toString());

// const minusAccount = new MinusAccoutn();
// console.log(minusAccount.toString());

//-----------------------------------------------------------------------

//내가 한거
// const MinusAccount = require('./MinusAccount');
// MinusAccount 인스턴스 생성
// const myMinusAccount = new MinusAccount('123456', 'John Doe', 'password123', 1000, 200);
// console.log(myMinusAccount.toString());

//------------------------------------------------------------------------
//쌤이 한거
const Account = require("./Account");
const MinusAccount = require("./MinusAccount");

console.log(Account);
console.log(MinusAccount);
const account = new Account('1111-222', '김기정', 123, 10000);
console.log(account.toString());
const minusAccount = new MinusAccount("1111-222", "김기정", 1234, 1000);
console.log(minusAccount.toString());

//-----------------------------------------------------
//노드 표준 내장 모듈 (내장 모듈은 이름만 쓰면 된다.)
const os = require("os");
// console.log(os);
console.log(os.arch());
console.log(os.homedir());


