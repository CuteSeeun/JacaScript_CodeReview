//팩토리 함수
//메모리 효율상 function 이름은 안쓰는게 좋다
const createUser = function(name, email, address) {//선언문보다 표현식으로 쓰는게 좋다
    //객체 리터럴 표현
    const user = {
        name, //키 값 
        email,
        address,
        buy () {
            console.log(`${user.name}님이 상품을 구매하였습니다`);
        }
    };
    return user; //리턴 바이 레퍼런스
}

//위의 코드와 같다
const createUser1 = function(name, email, address) {//선언문보다 표현식으로 쓰는게 좋다
    //객체 리터럴 표현
    return {
        name, //키 값 
        email,
        address,
        buy () {
            console.log(`${user.name}님이 상품을 구매하였습니다`);
        }
    };
}

//팩토리 함수 
//필요할 때마다 만들어서 값 넣기
const kim = createUser('김기정', 'bangry@gmail.com', '서울'); //유저 객체가 만들어지면 받아야 하니 const kim을 써서 거기에 넣어 놓는거다
                                                              //여기서 kim은 다른 주소를 가리킨다 (주소가 아니라 객체인가?)
kim.buy();
const lee = createUser('이재용', 'jfakdf@gmial.com', '경기도');
lee.buy();
//kim와 lee는 다른 객체이다