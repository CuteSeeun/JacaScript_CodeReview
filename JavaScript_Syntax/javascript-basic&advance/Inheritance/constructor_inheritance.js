//생성자 함수 상속
//employee를 만들고 manager가 상속받도록 해보자
//모든 사원들의 공통 프로퍼티와 메서드 정의
function Employee(name, salary) {
    this.name = name;
    this.salary = salary;
}

Employee.prototype.getName = function () {
    return this.name;
}
Employee.prototype.getSalary = function () {
    return this.salary;
}

Employee.prototype.toString = function () {
    return `${this.name}님의 급여는 ${this.salary}입니다, 보너스 : ${this.bonus}`;
}

const employee = new Employee("김기정", 1000);
console.log(employee.getName()); //프로퍼티 접근할때 메서드를 통해서 (직접 말고)
console.log(employee.toString()); //출력 : 김기정님의 급여는 1000입니다

//-----------------------------------------------------------

//생성자 상속
/* 1. 새로운 생성자 만들기
   2. 상속받을 생성자의 this로 바꿔주고 매개변수 넣기
   3. 추가할 프로퍼티 넣기
   4. call로 생성자 연결
   5. 그러나 생성자를 상속한다고 프로토타입까지 상속되는건 아니다 -> 그래서 나온게 class
   6. Object 객체의 setPrototypeOf()으로 프로토타입 변경하기
*/
//매니저라는 생성자 만들기
function Manager(name, salary, bonus) { //기존 사원들에게 없는 프로퍼티를 추가할 수 있다
    //기존 사원들의 프로퍼티를 가져오고(Employee 재사용) bonus 프로퍼티를 추가하면 될거 같다
    //모든 생성자들에게는 this가 이미 안보이게 만들어져 있다 그래서 this때문에 직접호출을 하면 안된다
    Employee.call(this, name, salary); //this를 바꿔주고 매개변수 넣어주기
    this.bonus = bonus;
}
//프로토타입 변경
Object.setPrototypeOf(Manager.prototype,Employee.prototype);

//기능 추가
Manager.prototype.getBonus = function () {
    return this.bonus;
}

//기능 재정의 (오버라이딩 Overriding)
Manager.prototype.getSalary = function () {
    return this.salary + this.bonus;
}


const manager = new Manager("매니저", 1000, 100);
console.log(manager.name, manager.bonus);
console.log(manager.toString()); //출력 : [object Object]
                                 //Object에는 toString이 있는데 최상위 object가 나온거다.
                                 //매니저의 프로토타입 객체에 메서드가 없어서 오브젝트가 실행된거다.
                                 //생성자 상속이 된다고 프로토타입 상속까지 되는건 아니다.
                                 //방법은 매니저 프로토타입(이는 비어있는 부모)을 임플로이로 바꿔줘야 한다. 
                                // Object.setPrototypeOf(Employee.prototype, Manager.prototype);로 프로토타입 변경을 한다
console.log(manager.getBonus());
console.log(manager.getSalary()); //부모에 있는거라 그대로 쓰면 안된다.

//toString은 모든 정보를 문자열로 보여준다.

function xxx (employee) {
    if (employee instanceof Emloyee) {
        console.log('원하는 기능 수행');
    }else {
        console.log("안되므뇨");
    }
}

doTask(employee);
doTask(manager);
doTask(new Date());

//타입오브 : 기본 타입과 객체타입을 판단
//컨스트럭트 : 구제척인거 일치하는거 
//같은 상속 계층 상에 있는가 : 인스턴스오브로 체크
