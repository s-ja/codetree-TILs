const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [N, M, K] = input.shift().split(' ').map(Number)

const penalties = Array(N).fill(0)
const fine = []

for(let elem of input){
    penalties[elem - 1]++
    if(penalties[elem - 1] >= K){
        fine.push(elem)
    }
}
// console.log(penalties)
// console.log(fine)

if(fine.length === 0){
    console.log(-1)
}else{
    console.log(fine[0])
}