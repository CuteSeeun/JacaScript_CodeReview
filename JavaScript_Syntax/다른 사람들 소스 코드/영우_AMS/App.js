/** 
 * 은행 직원용 계좌 관리 애플리케이션
 * 
 * 작성자 : 조영우
 */

const { accountRepository } = require("./module/accountRepository")

/* INIT */
console.log(`[ KOSTA BANK 계좌 관리 프로그램 ]`);

accountRepository.addAccount("조영우", 1234, 1000);
accountRepository.addMinusAccount("박박박", 1234, 1000, 9000);
console.log(accountRepository.toString(accountRepository.search.byAll()));
console.log(accountRepository.balanceGlobalExtrema.max());


/* END */
console.log(`[ KOSTA BANK 계좌 관리 프로그램 종료 ]`);