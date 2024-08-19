//클래스로 생성
//이는 계좌를 관리하는 객체이다 (계좌를 관리하는 배열)

/**
 * 계좌 관리 객체
*/


class AccountRepository { 
    constructor () {
        this.accounts = [
            {number : 111-222, owner : "최세은", password : "****", balance : 500},
            {number : 222-333, owner : "김정연", password : "****", balance : 600},
            {number : 333-444, owner : "이현경", password : "****", balance : 700},
            {number : 444-555, owner : "한채경", password : "****", balance : 800}
        ]; //메모리가 생성되는 this라는 객체에
        //this.accounts = new Array(10);이랑 똑같은거 크기만 빼고.
    }

    //setter, getter _어카운트의 레파지토리의 setter.getter이다.

 
    //신규 계좌 등록 기능
    addAccount(account) {

        //1. 계좌를 추가한다
        //2. 추가하려는 계좌가 배열에 있는지 조회한다
        //3. 없다면 등록하고
        //4. 있다면 "이미 있는 계좌입니다"를 반환한다.

         if (this.accounts.owner == account.owner) {
             this.accounts.push(account);
         }else {
             console.log("이미 있는 계좌입니다");
         }
    }

    //전체 계좌 목록을 반환
    findByAll(){
        
        //1. 전체 계좌 목록을 복사한다.
        //2. 전체 계좌 목록 복사본을 반환한다
        return this.accounts;
        //복사본을 반환
    }

    //검색 기능 _ 특정 계좌번호 받아서(조회하고자 하는 계좌) 계좌번호 조회 후 그 계좌를 반환
    //계좌 찾기
    findByNumber(accountNumber) {

        //1. 찾고자 하는 계좌를 받는다
        //2. 전체 계좌 배열 복사본을 가져와
        //3. 전달받은 계좌가 있는지 배열을 순회한다 _ forEach()
        //4. 일치하는 계좌가 있다면 그 계좌의 정보를 반환한다
        //5. 일치하는 계좌가 없다면 "일치하는 계좌가 없습니다"를 반환한다
        /*
        this.accounts.forEach((findNumber) => {
            if (findNumber.numer == accountNumber){
                return findNumber.array;
            }else {
                console.log("일치하는 계좌가 없습니다");
            }
        });
        */

        this.accounts.find( (findnumber) => {
            if (findnumber.number == accountNumber) {
                return //그 넘버의 계좌 정보를 출력
            }else {
                return "일치하는 계좌가 없습니다";
            }
        });

    }

    //예금주명으로 조회하여 반환 _ 계좌번호는 유니크하다고 가정.
    findByName(accountOwner){

        //1. 예금주명을 인자로 받는다
        //2. 전체 계좌 배열 복사본을 불러와 예금주명으로 순회한다
        //3. 일치하는 예금주가 있다면 그 계좌 정보를 반환한다
        //4. 일치하는 예금주가 없다면 "일치하는 예금주가 없습니다"를 반환한다
        /*
        accounts.forEach((name) => {
            if (name.owner === accountOwner) {
                return name.array;
            }
            else{
                console.log("일치하는 예금주가 없습니다");
            }
        });
        */

        const foundAccount = this.accounts.find((findowner) => {findowner.owner == accountOwner}) //배열 객체를 반환

        if (foundAccount) {
            return foundAccount;//그 owner의 계좌 배열 객체를 반환
        }else {
            return "일치하는 계좌가 없습니다";
        }
    }

    //모든 계좌의 총 금액을 반환
    sumByAll() {

        //1. 전체 계좌 배열의 복사본을 가져온다
        //2. 각 계좌의 잔고 금액을 더하여 반환한다 _ reduce()
        const result = accounts.reduce((acc, accountOwner) => {
            return acc + accountOwner.balance;

        }, 0); return result;

    }

    //계좌의 잔액 중 최고 금액을 반환
    maxByAll () {

        //1. 전체 계좌 배열의 복사본을 가져온다
        //2. 각 계좌의 금액을 순회한다 _ for...of 문
        //3. 순회 후 최고 금액을 반환한다
        let max = accounts[0];
        for (const account of accounts) {
            if (account.balance > max.balance){
                max = account.balance;
            }
        }
        return max;
    }

    //계좌의 잔액 중 최저 금액을 반환
    minByAll () {

        //1. 각 계좌의 금액을 순회한다 _ for...of문
        //2. 순회 후 최저 금액을 반환한다
        let min = accounts[0];
        for (const account of accounts) {
            if (account.balance < min.balance) {
                min = account.balance;
            }
        }
        return min;
    }

    //특정 범위의 잔액을 조회 (예 : 30만원 ~ 60만원을 가진 계좌들을 조회하여 그 계좌들을 반환) _ 인자를 두개 받아야 한다
    amountByRange(range1, range2) {
        
        //1.. 특정 범위를 인자로 받는다.
        //2. 배열을 순회하면서 특정 범위에 맞는 계좌를 찾는다
        //3. 조건에 맞는 계좌들을 반환한다
        //4. 조건에 맞는 계좌들이 없을 경우 "해당 금액에 일치하는 계좌는 없습니다"를 반환한다
        this.accounts.forEach();
    }

    //수정 기능 : 이름과 계좌번호를 매개변수로 받아 계좌의 예금주명을 수정하는 기능 _ 예금주명을 뭐로 수정할 것인지....?
    nameToModify(owner, accountNumber) {

        //1. 베열을 순회하면서 전달인자와 일치하는지 조회한다
        //2. 전달인자와 일치하는 계좌가 있다면 
        //3. 그 계좌배열에서 예금주명을 수정 후 반환한다
        //4. 일치하는 계좌가 없다면 "일치하는 계좌가 없습니다"를 반환한다.

    }

    //계좌번호를 매개변수로 받아 그 계좌를 삭제하는 기능
    deleteNumber(accountNumber) {

        //1. 전체 배열을 순회하면서 전달인자와 일치하는 계좌가 있는지 찾는다
        //2. 일치하는 계좌가 있다면 그 계좌를 삭제 후 전체 배열을 반환한다 delete
        //3. 일치하는 계좌가 없다면 "일치하는 계좌가 없습니다"를 반환한다. 

    }

}

module.exports = AccountRepository;

console.log();