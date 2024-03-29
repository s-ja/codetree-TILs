const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const targer = input[0]
const partial = input[1]

console.log(solution())

function solution(){
    if(targer.includes(partial)){
        return targer.indexOf(partial)
    }else{
        return -1
    }
}