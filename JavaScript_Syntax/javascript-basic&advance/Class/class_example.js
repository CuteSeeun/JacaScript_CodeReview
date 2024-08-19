//클래스
//이는 동작할 때 생성자 함수처럼 동작한다 (내부적으로 생성자가 된다)
class Employee {
    constructor (name, salary) { //메서드 (생성자)
        // this = {};
        //초기화 작업
        this.name = name;
        this.salary = salary;
        //return this; 암묵적으로 존재
    }

    //setter 및 getter _ 통로 (인스턴스 메서드)
    //이름을 반환하는 getter
    set name(name) {
        //console.log("set name Called..");
        //this안에 저장하는 위치를 바꿔주는 거다 그래서 프로퍼티를 새로 하나 판다
        if(name){
            this._name = name;
        }   
    }
    get name () {
        return this._name;
    }

    set salary (salary) {
        if(salary <= 0){
            throw new Error("급여는 양수여야 합니다.");
        }
        this._salary = salary;
    }
    get salary(){
        return this._salary; //return this._salary = salary; 라고 하니깐 레퍼런스 오류가 낫엇음
    }

    toString() {
        return `${this.name}, ${this.salary}`; //t
    }
}
/*
const employee = new Employee("김기정", 1000); //호출
console.log(employee.toString()); //toString 호출해서 뭐가 있는지 보는거다. 출력 : 김기정, 1000
console.log(Employee.prototype);

employee.name = "박기정";
employee._name = "헐";
console.log(employee.name); //출력 : 박기정 (setter를 통해 설정된 값) 

employee.salary = 100;//프로퍼티에 접근하는 것처럼 보이지만 getter에 접근하는 거임
console.log(employee.salary); //출력 : 100
employee.salary = -1; //예외 발생 : Error 급여는 양수여야 합니다

Employee.commonMethod(); //Employee.commonMethod()는 정의되지 않았으므로 오류를 발생시킵니다. 
*/

//매니저라는 클래스 만들자
class Manager extends Employee {//기존에 있는 employee 그대로 내려받고 싶다. Employee는 부모, manager는 자식
    constructor(name, salary, bonus) {
        //부모 생성자를 재사용해서 했던 걸 super로 this까지 넘겨주면서 emplyoee의 con을 불러보자(call)
        //   -> Employee.call ~ 어쩌고 저쩌고 
        super(name, salary);
        this.bonus = bonus;
    }
    //재정의
    toString() {
        //return super.toString() + `${this.name}`; //부모를 가리키는 참조변수 super
        return `${super.toString()}, ${this.bonus}`;
    }

}

const manager = new Manager("관리자", 1000, 100); //매개변수에 값을 넣어보자
console.log(manager.salary);
console.log(manager.toString());

