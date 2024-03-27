const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const [a, b] = input.split(" ").map(Number);

let cnt = 0;

for(let i = a; i <= b; i++){
    if(isMagicNum(i)){
        cnt++;
    }
}

function isMagicNum(n){
    return n % 3 === 0 || include3(n)
}

function include3(n){
    const numStr = n.toString()
    if(numStr.includes("3") || numStr.includes("6") || numStr.includes("9")){
        return 1
    }else{
        return 0
    }
}

console.log(cnt)