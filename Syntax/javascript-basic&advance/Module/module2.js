const object = require("./module"); //모듈 시스템은 상대뭐시기로. 현재 위치를 기준으로

console.log(object); //객체를 가져온거임
console.log(object.title);
console.log(object.MAX_VOLUME);
console.log(object.sum(10,20));
console.log(object.user.toString());

const {title, MAX_VOLUME, sum, user} =require("./module");// 가져올 때 참조?참고?만 하는거다
console.log(title);
console.log(sum(10,20));
console.log(user);



