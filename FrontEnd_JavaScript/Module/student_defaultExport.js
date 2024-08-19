//생성자 함수
/*
export default function Student(name){
    //this = {}; <- 리턴안해도 this를 반환. this는 인스턴스를 뜻한다.
    this.name = name; //인스터스에 내용 넣음

}
*/

const Student = function(name){
    this.name = name;
}
export default Student;