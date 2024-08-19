//애플리케이션의 엔트리포인트(실행 진입점) 역할 파일 //여기는 출력 담당

/**
 * 은행 직원용 계좌 관리 애플리케이션 
 * 작성자 : 최세은
 */
const Account_array = require("./Account");
const MinusAccount_array = require("./MinusAccount");
const AccountRepository = require("./AccountRepository");


//시작
console.log("[KOSTA BANK 계좌 관리 프로그램]");


//일반계좌, 마이너스 계좌, 계좌 관리 객체 생성 (모듈)
const account = new Account_array();
const minusaccount = new MinusAccount_array();
const accountRepository = new AccountRepository



//신규 계좌 등록 넣어보기 (임의의 데이터 넣기)
const exist = accountRepository.addAccount(account);
const exist1 = accountRepository.minusaccount(account);

if (exist) {
    console.log("신규 계좌로 등록하였습니다");
} else {
    console.log("기존에 등록된 계좌입니다");
};


//은행의 전체 계좌를 출력 _ 일반계좌와 마이너스를 정렬해서 출력하기 (그럼 기본 배열은 섞어놓자)
//계좌종류  계좌번호  예금주명  비밀번호  현재잔액
//일반계좌  111-222    최세은    1234       500     
//마이너스   111-223   김정연    1234       600    
const accounts = accountRepository.findByAll();



//
//AccountRepository.js에 등록된 기능들을 출력
//구현할 기능들 <등록, 삭제, 검색, 수정 등등>





console.log("[KOSTA BANK 계좌 관리 프로그램 종료]"); //종료
