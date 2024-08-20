/**
 * 계좌 관리 객체
 */
class AccountRepository {
    constructor() {
        this.accounts = [];
    }
    set accounts(accounts) {
        this._accounts = accounts;
    }
    get accounts() {
        return this._accounts;
    }
    // 계좌 추가
    addAccount(account) {
        if (this.accounts.indexOf(account) === -1) {
            this.accounts.push(account)
            return true;
        } else {
            return false;
        }
    }
    // 전체 출력
    findByAll() {
        let string = `계좌종류\t\t계좌번호\t\t예금주명\t\t비밀번호\t\t현재잔액
        ================================================\n`
        let exist = this.accounts.map((account) => {
            return `${account.loan > 0 ? "마이너스" : "일    반"}\t\t${account.number}\t${account.name}\t\t\t****\t\t${account.loan > 0 ? account.balance - account.loan : account.balance}\n`
        })
        return string + exist;
    }
    // 계좌번호로 찾기
    findByNumber(number) {
        return this.accounts.find(account => account.number === number)
    }
    // 이름으로 찾기
    findByName(name) {
        return this.accounts.filter(account => account.name === name)
    }
    // 전체 금액 합계
    findTotalMoney() {
        return this.accounts.reduce((acc, account) => acc += (account.loan > 0 ? account.balance-account.loan : account.balance), 0)
    }
    // 최고 예금액 찾기
    findHighMoney() {
        return this.accounts.reduce((acc, account) => acc > account.balance ? acc : account.balance, 0)
    }
    // 최저 예금액 찾기
    findLowMoney() {
        return this.accounts.reduce((acc, account) => acc < account.balance ? acc : account.balance, this.accounts.balance)
    }
    // 특정 범위의 금액 찾기
    findSomeMoney(num1, num2) {
        return this.accounts.filter((account) => num1 <= account.balance && account.balance <= num2 ? true : false)
    }
    // 이름 변경하기
    updateName(beforeName, afterName) {
        let index = this.accounts.findIndex((account) => account.name === beforeName)
        if (index >= 0) {
            this.accounts[index].name = afterName
            return `${beforeName}님이 ${afterName}님으로 변경되었습니다.`
        } else {
            return "입력한 계좌는 존재하지 않습니다"
        }
    }
    // 계좌 삭제하기
    deleteAccount(number) {
        let index = this.accounts.findIndex((account) => account.number === number)
        if (index >= 0) {
            return this.accounts.splice(index, 1)
        } else {
            return "입력한 계좌는 존재하지 않습니다"
        }
    }
}

module.exports = AccountRepository;