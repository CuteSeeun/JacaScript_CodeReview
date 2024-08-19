const account = {
    number : 22,
    owner :  "최세은",
    password : 1234,
    balance : {
        deposit : 500,
        withdraw : 200,
        sum : function() {
            return this.deposit - this.withdraw;
        },
    },

    //기능
    checkPassword : function () {
        if (password = 1234) {
            console.log(`계좌 비밀번호가 ${this.password}로 일치합니다`);
        }
    },
    check : function() {
        //console.log(`${this.password}로  `);

        console.log(`${this.owner}고객님의 잔액은 ${this.balance.sum()}원 입니다`);
    }
};
account.checkPassword();
account.check();



//선생님이 한거
const account2 = {
    number : "1111-2222",
    owner : "김기정",
    password1 : 1234,
    balance1 : 100000,
    deposit1 : function (money) {
        return this.balance1 += money;

    },
    withdraw1 : function (money) {
        if (money > this.balance1) {
            return -1;
        }
        return this. balance1 -= money;
    },
    getBalance : function () {
        this.balance1;
    },
    checkPassword : function (password1) {
        return this.password1 === this.password1;
    },
};

let inputPassword = 1234;
if(account.checkPassword(inputPassword)) {
    let balance1 = account2.deposit1(10000);
console.log('입금 후 잔액 : ' + balance1);
balance1 = account2.withdraw1(100000);
console.log(`출금 후 잔액: ` + balacne1);

//출금 오류 생성해보기
balance1 = account2.withdraw1(10000000);
if (balance1 === -1) {
    console.log("잔액 부족");
}else {
    console.log('출금 후 잔액 : ' + balance1);
    }
} else {
    console.log("비밀번호가 일치하지 않습니다");
}


//call by value 테스트
const account3 = account; //얇은 복사 = 공유
account3.owner = "김태희"; //원본의 owner가 바뀌어 버렸다.
console.log(account3);





