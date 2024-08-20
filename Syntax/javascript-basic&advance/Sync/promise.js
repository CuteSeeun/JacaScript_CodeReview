const promise = new Promise((resolve,reject) => {
    //서버 통신 (생성자 코드)
    const ok = true;
    if(ok) {
        const message = "안녕하세요";
        resolve(message);
    }else{
        reject(new Error("문제 발생")); //에러가 나면 에러를 전달. 여러 정보를 가지고 있는 에러 객체를 이용
    }
});

//소비자 코드 (데이터를 소비하는 )
//여기가 비동기. 이 코드는 분리되어 있는 코드이다. 호출하고 리턴 받는 방법이 아니다
//비동기라는건 콜백 함수를 사용한다는 것
//비동기로 promise로부터 데이터 소비
promise.then((message) => { //콜백에 message가 들어온다
    return message + " 김기정님"; //이는 기존의 promise의 resolve가 된다
    //then은 promise를 반환하는데 받은 데이터를 조합 후 가공해서 반환할 때는 
    //일단 resolve를 호출하고 그 데이터는 then을 통해서 보내줄 수 있다
    //그래서 밑에 then을 써야 한다
})
.then((message2)=>{
    console.log(message2);
    //서버와 다시 통신할 때 (비동기로)
    return new Promise((resolve, reject)=>{//여기서 return 을 쓰는 이유 : 소비자한테 전달해주기 위해서
        //서버 비동기 통신
        const list = [ //이를 서버에서 받은 제이슨 데이터라고 생각해보자
            {title : "게시판 제목1", content : "내용1"},
            {title : "게시판 제목1", content : "내용1"},
            {title : "게시판 제목1", content : "내용1"},
        ];
        const json = JSON.stringify(list);
        const list2= JSON.parse(json);//제이슨을 객체로
        resolve(list2);
    });

})
.then((list) => {
    console.log(list);
})

//오류를 받는 메서드는 따로 있다
.catch((error) =>{
    console.log(error.message);
})
.finally(()=>{
    console.log("항상 실행되는 영역");
});