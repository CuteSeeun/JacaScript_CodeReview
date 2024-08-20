//콜백 지옥
const printLetter = function() {
    console.log("A");
    setTimeout( () => {
        try{
        console.log("B");
        throw new Error("네트워크 장애 발생");
        }catch(error){
            console.log(error);
        }
        setTimeout( () => {
            console.log("C");
            setTimeout( () => {
                console.log("D");
            }, 3000);
        }, 1000);
    }, 2000);//비동기로 B찍기, 이는 백그라운드에 등록된다
}

printLetter();