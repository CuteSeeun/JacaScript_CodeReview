//에러 객체
class AccountError extends Error {
    constructor(code, message){
        super(message); //this 넘겨줘서 초기화.../
        this.code = code;
    }
    set code(code) {
        this._code = code;
    }
    get code(){
        return this._code;
    }
    toString(){
        return `[${this.code}] : ${this.message}`
    }
}

module.exports = AccountError;
