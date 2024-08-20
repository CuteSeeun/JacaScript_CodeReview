/**
 * 은행 직원용 계좌 관리 애플리케이션
 * 작성자 : 최규호
 */
const Account = require("./Account")
const MinusAccount = require("./MinusAccount")
const AccountRepository = require("./AccountRepository")


console.log("[ KOSTA BANK 계좌 관리 프로그램 ]");
const accounts = new AccountRepository;



// 신규 계좌 등록
const account1 = new Account("123-456-7890", "홍길동", 1234, 10000);
const account2 = new Account("234-567-8901", "김철수", 1234, 1000000);
const account3 = new MinusAccount("345-678-9012", "박춘배", 1234, 10000, 50000);
const account4 = new MinusAccount("456-789-0123", "박춘배", 1234, 1000000, 500000);

accounts.addAccount(account1)
accounts.addAccount(account2)
accounts.addAccount(account3)
accounts.addAccount(account4)

// console.log(accounts);

// 전체 계좌 목록 출력
console.log(accounts.findByAll());


// 계좌번호로 검색
console.log("[계좌번호 검색]");
console.log(accounts.findByNumber("234-567-8901"));
console.log();

// 이름으로 검색
console.log("[이름으로 검색]");
console.log(accounts.findByName("박춘배"));
console.log();

// 전체 금액 합계(마이너스 잔고 포함)
console.log("[전체 금액 합계]");
console.log(accounts.findTotalMoney());
console.log();

// 전체 계좌 금액 중 최고 금액
console.log("[최고 금액]");
console.log(accounts.findHighMoney());
console.log();

// 전체 계좌 금액 중 최소 금액
console.log("[최소 금액]");
console.log(accounts.findLowMoney());
console.log();

// 특정 범위 잔고 목록
console.log("[잔고 목록]");
console.log(accounts.findSomeMoney(5000, 50000));
console.log();

// 이름 수정
console.log("[이름 수정]");
console.log(accounts.updateName("김철수", "김철민"));
console.log();

// 계좌 삭제
console.log("[계좌 삭제]");
console.log(accounts.deleteAccount("123-456-7890"));
console.log();

console.log("[ KOSTA BANK 계좌 관리 프로그램 종료 ]");