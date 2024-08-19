class Book {
    constructor (title, author, page) {
        this.title = title;
        this.author = author;
        this.page = page; //여기서 초기화할 때 왜 this를 쓸까?
    }
    //재정의
    toString() {
        return `${this.title}, ${this.author}, ${this.page}`;
    }
    //오버라이딩
    hasOwnProperty(name) { //재정의 오염
        return false;
    }
}

const book = new Book("JavaScript", "홍길동", 100);
console.log(book.toString());
console.log(book.hasOwnProperty("title"));

for (const key in book) {
    if (Object.hasOwnProperty.call(book, key)) { //재정의가 오염되어있을까봐 그대로 사용하고 싶을 때 이 코드를 쓴다.
        //내가 만든 hasOwnProperty를 사용하는게 아니라 object에 있는 원래 hasOwnProperty를 사용하겠다는거. 즉 오버라이딩되지 않은 것을 사용하겟다는 말이다.
        const element = book[key];
        console.log(element);
    }
}

//Object의 static
const entries = Object.entries(book);
console.log(entries);

const dog1 = {name : "루니"};
const dog2 = {name : "루니"};
console.log(dog1 === dog2);

console.log(Object.entries(dog1).toString());
console.log(Object.entries(dog1).toString() === Object.entries(dog2).toString());