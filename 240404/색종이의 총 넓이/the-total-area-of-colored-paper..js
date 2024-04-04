const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const n = Number(input.shift());
const OFFSET = 100;
const MAX_AREA = 200;
const SQUARE = 8;

const leftUnder = []

for(const elem of input){
    leftUnder.push(elem.split(' ').map(x => Number(x) + OFFSET));
}

const matrix = Array.from({length : MAX_AREA + 1}, () => Array(MAX_AREA + 1).fill(0));

// console.log(leftUnder)

leftUnder.forEach((x)=>{
    const [x1, y1] = x
    const x2 = x1 + 8
    const y2 = y1 + 8

    for(let i = x1; i < x2; i++){
        for(let j = y1; j < y2; j++){
            matrix[i][j] = 1
        }
    }
})

let cnt = 0;

for(const row of matrix){
    for(const col of row){
        if(col === 1){
            cnt++
        }
    }
}

console.log(cnt)