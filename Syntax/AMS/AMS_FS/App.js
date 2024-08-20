/**
 * 은행 직원용 계좌 관리 애플리케이션
 * 작성자 : 최세은
 */

//#region 모듈 가져오기
const fs = require('fs');
const path = './ams.json';
const Account = require("./Account")
const MinusAccount = require("./MinusAccount")
const AccountRepository = require("./AccountRepository")
//#endregion


//#region 신규 계좌 등록
/*AccountRepository의 인스턴스를 생성하고, Account 객체를 추가*/
const accountRepository = new AccountRepository;//AccountRepository 인스턴스 생성
                                                //accountRepository객체를 통해 AccountRepository클래스의 메서드를 사용할 수 있다
/*
const account1 = new Account("123-456-7890", "홍길동", 1234, 1000); //계좌 추가
const account2 = new Account("234-567-8901", "김철수", 1234, 100);
const account3 = new MinusAccount("345-678-9012", "박춘배", 1234, 1000, 5000);
const account4 = new MinusAccount("456-789-0123", "박춘배", 1234, 200, 500);
//Account 객체는 개별 계좌를 나타내며 이 객체들은 AccountRepository의 인스턴스에 추가하여 관리한다. 
//이를 위해 Account 클래스를 사용하여 객체를 생성하고 AccountRepository의 addAccount메서드를 호출하여 이 객체를 추가한다

accountRepository.addAccount(account1)
accountRepository.addAccount(account2)
accountRepository.addAccount(account3)
accountRepository.addAccount(account4)
*/
const initialAccounts = [
    new Account("123-456-7890", "홍길동", 1234, 1000),
    new Account("234-567-8901", "김철수", 1234, 100),
    new MinusAccount("345-678-9012", "박춘배", 1234, 1000, 5000),
    new MinusAccount("456-789-0123", "박춘배", 1234, 200, 500)
];
initialAccounts.forEach((account)=>{accountRepository.addAccount(account)});
//#endregion


//#region JSON파일 불러오기 및 생성
//1. ams.json파일 있는지 확인
fs.access('./ams.json', fs.constants.F_OK, (err) => {
    //존재 안함
    if (err) {
        console.log('파일이 존재하지 않습니다. 빈 파일을 생성하겠습니다.');
        //빈 파일 생성
        fs.writeFile(path, JSON.stringify([], null, 2), (err)=>{
            if(err){
                console.error('오류 발생:', err);
            }else{
                console.log("빈 파일이 생성되었습니다");
            }
        });
    } 
    //존재함
    else { 
        console.log('파일이 존재합니다. 정보를 읽어오겠습니다.');
        //읽어와 AccountRepository배열에 초기화
        fs.readFile('./ams.json', 'utf8', (err, data)=>{
            if(err){
                //파일 읽는 도중 오류 발생
                console.error('오류 발생 :', err);
                return;
            }
            try{
                //가져온거 역직렬화
                const jsonData = JSON.parse(data);
                //AccountRepository의 배열에 초기화
                jsonData.forEach(accountInfo => {
                    let account;
                    if(accountInfo.loan !== undefined){
                        //마이너스 인스턴스 생성
                        account = new MinusAccount(
                            accountInfo.number,
                            accountInfo.name,
                            accountInfo.password,
                            accountInfo.balance,
                            accountInfo.loan
                        );
                    }else{
                        //어카운트 인스턴스 생성
                        account = new Account(
                            accountInfo.number,
                            accountInfo.name,
                            accountInfo.password,
                            accountInfo.balance
                        );
                    }
                    accountRepository.addAccount(account);
                })
                console.log("파일을 성공적으로 가져왔습니다");
            }catch(err){
                console.error('파싱 중 오류 발생:', err);
            }
        });
    }
});

/* 비동기로 처리
try {
    fs.accessSync('./file.txt', fs.constants.F_OK);
    console.log('파일이 존재합니다.');
} catch (err) {
    console.log('파일이 존재하지 않습니다.');
}
*/

//#endregion


//#region readLine 모듈 기반 표준입출력
//readLine 모듈 기반 표준입출력
const { createInterface } = require("readline");
// 키보드 입력을 위한 인터페이스 생성
const consoleInterface = createInterface({
    input: process.stdin,
    output: process.stdout,
});
// 키보드 입력 받기
const readLine = function (message) {
    return new Promise((resolve) => {
        consoleInterface.question(message, (userInput) => {
            resolve(userInput);
        });
    });
}
//const readLine = (message) => new Promise((resolve) => consoleInterface.question(message, resolve));
//#endregion


//#region 콘솔창 메뉴
// 콘솔창 메뉴 출력
const printMenu = function () {
    console.log("--------------------------------------------------------------------");
    console.log("1.계좌등록 | 2.계좌목록 | 3.예금 | 4.출금 | 5.검색 | 6.삭제 | 7.종료");
    console.log("--------------------------------------------------------------------");
}
//#endregion


//#region 비동기로 입출력 기능 실행
const app = async function () {
    console.log(`====================================================================`);
    console.log(`--------------     KOSTA 은행 계좌 관리 프로그램     ---------------`);
    console.log(`====================================================================`);

    //const accountRepository = initAccountRepository();

    let running = true;
    while (running) {
        printMenu();
        let menuNum = parseInt(await readLine("> "));
        
        switch (menuNum) {
            case 1:
                // createAccount();
                console.log("■ 등록 계좌 종류 선택");
                const header =
                    "--------------------------------\n" +
                    "1. 입출금계좌 | 2. 마이너스 계좌\n" +
                    "--------------------------------";
                console.log(header);
                let account = null;
                let no = parseInt(await readLine("> "));
                let accountNum = await readLine("- 계좌번호 : ");
                let accountOwner = await readLine("- 예금주명 : ");
                let password = parseInt(await readLine("- 비밀번호 : "));
                let initMoney = parseInt(await readLine("- 입금액 : "));
                let rentMoney = 0;
                if (no === 1) {
                    account = new Account(accountNum, accountOwner, password, initMoney);
                } else {
                    rentMoney = parseInt(await readLine("- 대출금액 : "));
                    account = new MinusAccount(accountNum, accountOwner, password, initMoney, rentMoney);
                }
                //console.log(accountNum, accountOwner, password, initMoney, rentMoney);
                
                // 신규 계좌 등록
                if (!accountRepository.findByNumber(accountNum)) {
                    if (accountRepository.addAccount(account)) {
                        console.log("신규 계좌 등록 완료!");
                    } else {
                        console.log("계좌 등록에 실패했습니다.");
                    }
                }else{
                    console.log("기존에 있는 계좌입니다.");
                }
                break;
            case 2: // 전체계좌 목록 출력
                console.log("-------------------------------------------------------");
                console.log("계좌구분 \t 계좌번호 \t 예금주 \t 잔액");
                console.log("-------------------------------------------------------");
                //console.log(accountRepository.findByAll());
                accountRepository.findByAll().forEach(account => { 
                    console.log(`${account instanceof MinusAccount ? "마이너스계좌" : "입출금계좌"} \t ${account.number} \t ${account.name} \t ${account.getBalance()}`);
                });
                break;
            case 3: // 입금
                // 계좌번호와 입금액 입력 받아 입금 처리
                let inputNo = await readLine("- 계좌번호 : ");
                let inputMoney = parseInt(await readLine("- 입금액 : "));
                
                //입력된 계좌를 찾아 
                const accountToDeposit = accountRepository.findByNumber(inputNo);

                if (accountToDeposit){
                    const result = accountToDeposit.deposit(inputMoney);
                    console.log(result);
                   //return result; 여기서 return문을 썼는데 이거 쓰면 함수가 끝나게 되어 반복문이 종료된다. 이부분을 수정해야 한다
                    console.log(`${inputMoney}원 입금 완료`);
                }else{
                    console.log("해당 계좌를 찾을 수가 없습니다");
                }
                break;
            case 4: // 출금
                // 계좌번호와 출금액 입력 받아 출금 처리
                let outputNo = await readLine("- 계좌번호 : ");
                let outputMoney = parseInt(await readLine("- 출금액 : "));
                
                const accountToWithdraw = accountRepository.findByNumber(outputNo);
                if (accountToWithdraw){
                    const result = accountToWithdraw.withdraw(outputMoney);
                    console.log(result);
                   //return result; 여기서 return문을 썼는데 이거 쓰면 함수가 끝나게 되어 반복문이 종료된다. 이부분을 수정해야 한다
                    console.log(`${outputMoney}원 출금 완료`);
                }else{
                    console.log("해당 계좌를 찾을 수가 없습니다");
                }
                break;
            case 5: // 계좌번호로 검색
                // 계좌 번호 입력 받아 계좌 정보 출력
                let searchNum = await readLine("- 계좌번호 : ");
                let finAccount = accountRepository.findByNumber(searchNum)
                //console.log(accountRepository.findByNumber(searchNum));

                if(finAccount){
                    console.log(finAccount.toString());
                }else{
                    console.log("계좌를 찾을 수가 없습니다");
                }
                break;
            case 6: //계좌 삭제
                // 계좌 번호 입력 받아 계좌 해당 계좌 삭제
                let deleteNum = await readLine("- 계좌번호 : ");
                accountRepository.deleteAccount(deleteNum)
                console.log("해당 계좌를 삭제했습니다");
                break;
            case 7: //프로그램 종료
                console.log(">>> 프로그램을 종료합니다.");
                //saveAccounts(accountRepository.findByAll()); // 애플리케이션 종료 시 계좌 정보를 파일에 저장
                consoleInterface.close();
                //5.애플리케이션 종료 시 지금 계좌 배열의 내용을 ams.json 파일에 저장
                saveJSON();
                running = false;
                break;
            default: console.log("잘못 선택하셨습니다.");
        }
    }
}
app();
//#endregion


//#region 
//현시점 계좌 배열 객체들을 ams.json 파일에 저장 
saveJSON = ()=>{
    //모든 계좌를 불러옴
    const jsonAccounts = JSON.stringify(accountRepository.findByAll());
    //직렬화
    //const jsonData = accounts.map((account)=>{
        
    //직렬화된 데이터 json파일에 저장
    fs.writeFile(path, jsonAccounts, (err)=>{
        if (err) {
            console.error('파일 저장 중 오류 발생:', err);
        } else {
            console.log('파일이 성공적으로 저장되었습니다.');
        }
    })

}
//#endregion



/*
//#region 공통 함수
// 파일 존재 여부를 확인하고 처리하는 함수
const checkFile = (filePath, onExist, onNotExist) => {
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            onNotExist();
        } else {
            onExist();
        }
    });
};

// JSON 파일을 읽어와 AccountRepository에 초기화하는 함수
const loadAccountsFromFile = () => {
    checkFile(path, () => {
        console.log('파일이 존재합니다. 정보를 읽어오겠습니다.');
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                console.error('오류 발생 :', err);
                return;
            }
            try {
                const jsonData = JSON.parse(data);
                jsonData.forEach(accountInfo => {
                    const account = accountInfo.loan !== undefined ?
                        new MinusAccount(
                            accountInfo.number,
                            accountInfo.name,
                            accountInfo.password,
                            accountInfo.balance,
                            accountInfo.loan
                        ) :
                        new Account(
                            accountInfo.number,
                            accountInfo.name,
                            accountInfo.password,
                            accountInfo.balance
                        );
                    accountRepository.addAccount(account);
                });
                console.log("파일을 성공적으로 가져왔습니다");
            } catch (err) {
                console.error('파싱 중 오류 발생:', err);
            }
        });
    }, () => {
        console.log('파일이 존재하지 않습니다. 빈 파일을 생성하겠습니다.');
        fs.writeFile(path, JSON.stringify([], null, 2), (err) => {
            if (err) {
                console.error('오류 발생:', err);
            } else {
                console.log("빈 파일이 생성되었습니다");
            }
        });
    });
};

// 계좌 번호로 계좌를 검색하는 함수
const findAccountByNumber = async (message) => {
    let accountNum = await readLine(message);
    return accountRepository.findByNumber(accountNum);
};

// 계좌를 파일에 저장하는 함수
const saveAccountsToFile = () => {
    const jsonAccounts = JSON.stringify(accountRepository.findByAll(), null, 2);
    fs.writeFile(path, jsonAccounts, (err) => {
        if (err) {
            console.error('파일 저장 중 오류 발생:', err);
        } else {
            console.log('파일이 성공적으로 저장되었습니다.');
        }
    });
};
//#endregion
*/