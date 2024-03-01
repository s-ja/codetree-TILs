const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [aL, bL] = input[0].split(" ").map(Number)

const A = input[1].split(" ").map(Number)

const B = input[2].split(" ").map(Number)


if(A.toString().includes(B.toString())){
    console.log("Yes")
}else{
    console.log("No")
}