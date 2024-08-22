//서버쪽에 비동기처리할 건데 만들어진것을 쓸거다. _ fetch

fetch("https://jsonplaceholder.typicode.com/posts") //비동기로 통신 갓다와서 프로미스로 반환해준다
.then((response)=>{
    // console.log(response);
    //우리는 response의 body가 필요하다
    return response.json(); //JSON.parse()와 동일한 역할을 한다
    //then안에서 리턴하면 response.json() 이 값을 포함한 프로미스를 반환하는거다.
    //즉 then안에서 문자열을 리턴하면 문자열을 포함한 프로미스를 반환한다
    //그래서 다음 then에서 얻고자 하는 데이터를 받아야 한다.
    //그리고 JSON.parse()쓸려면 데이터가 어느 곳에 들어있는지 찾아서 써줘야 한다.
    //근데 그거 찾기 힘드니 json()를 써주면 알아서 찾아서 파싱해준다
})
//여기서 데이터를 받는다
.then((posts) => {
    console.log(posts);
    
});




fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then((posts) => {
        console.log(posts);
        
    })
    .catch(console.log);

