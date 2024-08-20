//require()없이 바로 사용할 수 있다 - global
console.log(global);

global.console.log("이잉");
//global은 생략 가능 _노드 내장 객체
// global.setTimeout(); 
// global.moddule.exports
// global.require('');

//window //호스트가 브라우저일 때 가능하다
//console.log(global This);

console.clear();
console.error("에러 발생");

const user = {

};
console.log(user);
console.dir(user);

const array = [
    {a : "b", c: "d"},
    {a : "b", c: "d"},
    {a : "b", c: "d"},
    {a : "b", c: "d"},
];
console.table(array);

console.time("start");
//---------------------
console.timeEnd("start");
for (let i = 0; i < 1000; i++) {
    
}

//setTimeout();
//setInterval();
setImmediate(()=>{
    console.log("비동기 출력");
});
console.log(__dirname);
console.log(__filename);
