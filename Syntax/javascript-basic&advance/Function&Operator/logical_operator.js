console.log('Java' && 'JavaScript');
console.log(0 && 'JavaScript');

function print(message) {
    let value = message || "헐"; //좌측이 들어온거고 우측이 안들어왔을때 내가 원하는 값 넣는거
    console.log(value);
}

print('김기정');
print();