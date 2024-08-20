const hello = function(message){
    console.log("Hello, javascript");
}

const printGugudan = (dan = 3) => {
    for(let i =1; i <= 9; i++){
        // console.log(`${dan} * ${i} = ${i * dan}`);
        document.write(`${dan} * ${i} = ${i * dan}`);

    }
}