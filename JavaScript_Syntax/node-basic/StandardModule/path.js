const path = require("path");
const string = __filename; //경로를 줘야 한다
const myPath = "c:\a\b";
const myPath1 = "c:\\a\\b//";
console.log(path.sep);
console.log(path.delimiter);
console.log(path.dirname(string));
console.log(path.dirname(myPath));  //내가 직접 지정한 경로는 역슬러쉬는 이스케이프 문자라 두개 줘야 한다
console.log(path.dirname(myPath1));
console.log(path.extname(string));

const pathObject = path.parse(string)
console.log(pathObject); //객체화 <json.parse와 비슷한듯>

let fullpath = path.join("c:", "a", "/b", "xxx.jpt");
console.log(fullpath);

fullpath = path.resolve("c:", "a", "/b", "xxx.jpt");
console.log(fullpath);

fullpath = path.resolve("/x", "a", "/b", "xxx.jpt");
console.log(fullpath);

fullpath = path.resolve("/x", "a", "b", "xxx.jpt");
console.log(fullpath);

fullpath = path.resolve("x", "a", "/b", "xxx.jpt");
console.log(fullpath);