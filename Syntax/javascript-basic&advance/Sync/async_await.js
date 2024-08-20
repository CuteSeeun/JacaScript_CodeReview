//async 키워드 사용
async function getHello(){
    //서버 통신 

    //서버 통신 이후 메세지를 반환
    return "안녕하세요";
}

const result = getHello();
result.then(console.log); //데이터만 반환
console.log(result); //프로미스를 반환

const message = await getHello()