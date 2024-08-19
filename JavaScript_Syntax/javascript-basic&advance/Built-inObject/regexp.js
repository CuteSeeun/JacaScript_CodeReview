//정규표현식
const phone = "010-9124-434한";

let regexp = /^\d{3}- \d{4}-\d{4}$/;
console.log(typeof regexp);
const match = regexp.test(phone);
console.log(match);

const str = "THIS Is a pen";
regexp = /is/ig;
console.log(regexp.test(str));

console.log(str.match(regexp));

console.log(phone.split(/-/));