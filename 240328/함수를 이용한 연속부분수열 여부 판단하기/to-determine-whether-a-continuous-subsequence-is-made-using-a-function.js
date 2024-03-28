const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n1, n2] = input[0].split(" ").map(Number)

const A = input[1].split(" ").map(Number)
const B = input[2].split(" ").map(Number)

function isContinue(a, b){
    const bStart = b[0]
    const aStart = a.splice(a.indexOf(bStart))
    // console.log(aStart)
    let result = true
    
    for(let i = 0; i < b.length; i++){
        if(aStart[i] === b[i]){
            continue
        }else{
            result = false
            break
        }
    }

    if(result){
        return "Yes"
    }else{
        return "No"
    }
}

console.log(isContinue(A, B))