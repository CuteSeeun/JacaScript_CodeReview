//단축메서드 사용
const rectangle = {
    width : 200,
    height : 100,
    area() {//이 스코프 안에는 width랑 height가 없는거다.
        return this.width * this.height //여기서 return 안쓰면 어떻게 되는걸까
    }
};
console.log(rectangle.area());