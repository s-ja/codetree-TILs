const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n1, n2] = input[0].split(" ").map(Number)

const A = input[1].split(" ").map(Number)
const B = input[2].split(" ").map(Number)

function isContinue(a, b){
    const bStart = b[0]
    const aStart = a.indexOf(bStart)
    let result = true
    for(let i = aStart; i < b.length; i++){
        if(a[i] === b[i]){
            continue
        }else{
            resut = false
        }
    }
    if(result){
        return "Yes"
    }else{
        return "No"
    }
}

console.log(isContinue(A, B))