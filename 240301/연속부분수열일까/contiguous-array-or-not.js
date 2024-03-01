const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [aL, bL] = input[0].split(" ").map(Number)

const A = input[1].split(" ").map(Number)

const B = input[2].split(" ").map(Number)

let tmp = []
for(let i = 0; i < aL; i++){
    for(let j = 0; j < bL; j++){
        if(A[i] === B[j]){
            tmp.push(B[j])
            break
        }
    }
}

if(tmp.length === B.length){
    console.log("Yes")
}else{
    console.log("No")
}