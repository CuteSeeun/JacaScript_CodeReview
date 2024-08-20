const sum = function (...nums) {//객체의 위치 못 바꾸게 const.그래서 표현식 쓸 때 주로 const
    //console.log(nums);
    //console.log(nums.length);
    let result = 0;
    for (let i = 0; i < nums.length; i++){
        let num = nums[i];
        result += num;
    }
    return result;
}

let result = sum(2,3); //나머지 매개변수는 배열로 담아놓는다. 
console.log(result);