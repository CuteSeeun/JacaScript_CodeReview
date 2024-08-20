let title = "모듈 사용하기";
const MAX_VOLUME = 100;

const sum = function (x,y) {
    return x + y;
}

const user = {
    id : "bangry",
    name : "김기정",
    toString() {
        return `아이디 : ${this.id}, 이름 : ${this.name}`;
    }
};

// console.log(module);

//모듈 내보내기 (통으로 내보내기)
//exports쓰면 내보내기 완. 내보내고 싶은 것들만 내보낸다. 노드가 다른 곳에서 쓸 수 있게 해준다
module.exports = {
    title,
    MAX_VOLUME,
    sum,
    user 
};

//하나씩 내보내기
exports.title = title;
exports.MAX_VOLUME = MAX_VOLUME;
exports.sum = sum;
exports.user = user;

/*title을 exports에 추가하고 싶다.
그럼 맨 위에 1번째 줄 코드 let title = "모듈 사용하기"; 이거를 
module.exports.title = "";로 쓰면 된다.
*/

/*  module.exports.sum = function () {} 
    console.log(sum(10,20)); 
    이렇게 하면 오류난다. sum은 모듈 안에 들어있으니깐

    cosnt {sum} = require("./module");
    console.log(sum(10,20)); 
    이렇게 하면 된다.??

    모듈 개념이 어떻게 돌아가는 것인지 알아보자
*/
