const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const n = Number(input.shift())
const OFFSET = 100
const MAX_N = 10
const MAX_R = OFFSET * MAX_N

const matrix = Array.from({length : MAX_R + 1}, () => Array(MAX_R + 1).fill(0))

for(let i = 0; i < n; i++){
    const [x1, y1, x2, y2] = input[i].split(' ').map(x => Number(x) + OFFSET)
    // const [x1, y1, x2, y2] = input[i].split(' ').map(x => Number(x) + 1)
    // console.log(x1, y1, x2, y2)
    if(i % 2 === 0){ //빨강(1)
        for(let i = x1; i < x2; i++){
            for(let j = y1; j < y2; j++){
                matrix[i][j] = 1
            }
        }
    }else{ //파랑(2)
        for(let i = x1; i < x2; i++){
            for(let j = y1; j < y2; j++){
                matrix[i][j] = 2
            }
        }
    }
}

let cnt = 0;

for(row of matrix){
    for(col of row){
        if(col === 2){
            cnt++
        }
    }
}

console.log(cnt)