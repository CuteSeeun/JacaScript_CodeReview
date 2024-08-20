//JSON.stringfy() 메서드
const user = {
    id : "bangry",
    name : "김기정",
    age : 30
    //foo : function() { //메서드는 직렬화되지 않는다. 데이터가 아니니깐.
    //    console.log(this.id);
    //}
};
console.log(typeof user);

let json = JSON.stringify(user); //object를 문자열로 표기한 표기법 json
console.log(typeof json);
console.log(json);

//JSON.parse() _ 객체화시킨다
const parseUser = JSON.parse(json);
console.log(parseUser.id, parseUser["name"]);

//특정 정보 빼고 직렬화 _ 필터링
json = JSON.stringify(user, (ket, value) => {
    if (key === "age") //age를 뺄거다
    {
        return undefined;
    } 
    return value;
});

const array = [
    {name : "김기정"},
    {name : "김기정"},
    {name : "김기정"},
]
console.log(JOSN.stringify(array, null, 2));