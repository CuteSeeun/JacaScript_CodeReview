
for (let i = 0; i < 5; i ++) { //행 반복
    for (let j = 0; j < 5; j++) {//열 반복
        process.stdout.write('*');
    }
    console.log();
}

console.log("-----------------");

for (let i = 0; i < 5; i ++) { //행 반복
    for (let j = 0; j <= i; j++) {//열 반복
        process.stdout.write('*');
    }
    console.log();
}

console.log("-----------------");

for (let i = 0; i < 5; i ++) { //행 반복
    for (let j = 5; j > i; j--) {//열 반복
        process.stdout.write('*');
    }
    console.log();
}

console.log("-----------------");

for (let i = 1; i <= 5; i ++) { //행 반복
    for (let j = 5; j > i; j--) {//열 반복
        process.stdout.write(' ');
    }
    for (let j = 1; j <= i ; j++) {
        process.stdout.write('*');
    }
    console.log();
}

console.log("-----------------");

let start = 0;

for (let i = 0; i < 4; i ++) { //행 반복
    for (let j = start; j < start + i +1; j++) {//열 반복
        process.stdout.write(j + "");
    }
    console.log();
    start += i + 1;
}

console.log("-----------------");

let num = 0;

for (let i = 0; i < 4; i ++) { //행 반복
    for (let j = 0; j < i + 1; j++) {//열 반복
        process.stdout.write(num+'');
        num++;
    }
    console.log();
    
}

console.log("-----------------");

//-----------------------------------------------------------------
//구구단 출력 _ 행과 열이 반복된다면 중첩문
for (let i = 2; i <= 9; i++) {//행 반복
    for(let j = 1; j <= 9; j++) {//열 반복
        process . stdout. write(i + "*" + j + "=" + (i*j) + " ");
    }
    console.log();
}