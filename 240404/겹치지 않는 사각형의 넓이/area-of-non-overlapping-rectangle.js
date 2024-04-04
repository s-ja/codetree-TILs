const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const OFFSET = 1000
const EndPoint = 2000

const matrix = Array.from({length : EndPoint + 1},(()=>Array(EndPoint + 1).fill(0)))

const A = input[0].split(' ').map(Number)
const B = input[1].split(' ').map(Number)
const M = input[2].split(' ').map(Number)

function paint(arr, num){
    const [x1, y1, x2, y2] = arr.map((x)=> Number(x) + OFFSET);

    for(let i = x1; i < x2; i++){
        for(let j = y1; j < y2; j++){
            matrix[i][j] = num
        }
    }
}

paint(A, 1)
paint(B, 1)
paint(M, 2)

let cnt = 0;

for(const row of matrix){
    for(const col of row){
        if(col === 1){
            cnt++
        }
    }
}

console.log(cnt)