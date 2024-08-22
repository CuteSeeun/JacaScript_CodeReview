

//promise 기반의 비동기 통신 함수
export const get = function (url) {
    // const xhr = new XMLHttpRequest(); 
    // xhr.open("GET", url);
    // xhr.addEventListener("load", (event) =>{
    //     if(xhr.status === 200){
    //         success(JSON.parse(xhr.responseText));
    //     }else{
    //         fail(xhr.status);
    //     }
    // } );
    // xhr.send();
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.addEventListener("load", (event) => {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(xhr.status);
            }
        });
        xhr.send();
    });
}
