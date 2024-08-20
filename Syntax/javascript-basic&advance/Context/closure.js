//클로저

const increamentCount = function () {
    let count = 0; 
    const increament = function () { //클로저임
        return ++count; 
    }
    return increament;
}

let resultIncreament = increamentCount();
let updateCount= increament();
console.log(`현재 카운트 : ${updateCount}`);
console.log(resultIncreament());
console.log(resultIncreament());
console.log(resultIncreament());
console.log(resultIncreament());
console.log(resultIncreament());

/*
console.log(increamentCount()());
console.log(increamentCount()());
console.log(increamentCount()());
*/
