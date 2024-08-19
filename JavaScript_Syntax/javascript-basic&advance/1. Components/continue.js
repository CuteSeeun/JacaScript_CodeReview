
//특정 코드 스킵
for (let i = 0; i< 10; i++) {
    console.log("a");
    console.log("b");
    if (i === 5){
        continue;
    }
    console.log("c");

}

for(let i = 1; i <= 10; i++){
        if ((i%2) == 1)
        console.log(i);
}

for(let i = 1; i <= 10; i++){
    if ((i%2) == 0){
        continue;
    }
    console.log(i);
}
