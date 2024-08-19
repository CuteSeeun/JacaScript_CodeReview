//some
let students = [
    {name : "Adams", score: 90},
    {name : "Bdams", score: 94},
    {name : "홍기정", score: 60},
    {name : "김길동", score: 93},
];

const exists = students.some( (people) => { if (people.score == 100) {return true;} return false; });
const exists2 = students.some( (people) => { return people.score === 100; } );
const exists3 = students.some ( people => people.score === 100);

console.log(exists);
console.log(exists2);
console.log(exists3);


//every
const exists4 = students.every ( people => people.score >= 60);
console.log(exists4);

