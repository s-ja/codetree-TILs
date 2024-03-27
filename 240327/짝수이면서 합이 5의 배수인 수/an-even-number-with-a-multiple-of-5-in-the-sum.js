const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const n = Number(input);

function say(n){
    if(answer(n)){
        console.log("Yes")
    }else{
        console.log("No")
    }
}

function answer(n){
    const [a, b] = n.toString().split("").map(Number)
    if(n % 2 === 0 && (a + b) % 5 === 0){
        return 1
    }else{
        return 0
    }
}

say(n)