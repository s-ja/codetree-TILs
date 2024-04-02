const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const [a, b, c] = input

//2011년 11월 11일 11시 11분
//2011년 11월 a일 b시 c분

function calc(a, b, c){
    if(a < 11){
        return -1
    }else if(a === 11 && b < 11){
        return -1
    }else if(a === 11 && b < 11 && c < 11){
        return -1
    }

    const days = a - 11
    const hours = (days * 24) - 11 + b
    const minutes = (hours * 60) - 11 + c
    return minutes
}

// 1일  = 24 시간  = 60분 * 24 시간 = 1440 분
// 1시간 = 60 분

console.log(calc(a, b, c))