const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const n = Number(input.shift());
const offSet = 100;
const maxN = 10;
const maxPoint = 100 + offSet;
const matrix = []

for(let i = 0; i < maxPoint + 1; i++){
    const tmp = []
    for(let i = 0; i < maxPoint + 1; i++){
        tmp.push(0)
    }
    matrix.push(tmp)
}

for(const elem of input){
    let [x1, y1, x2, y2] = elem.split(' ').map(x => Number(x) + offSet);

    for(let i = x1; i < x2; i++){
        for(let j = y1; j < y2; j++){
            matrix[i][j] = 1;
        }
    }
}

// console.log(matrix)

let area = 0;

for(const row of matrix){
    for(const col of row){
        if(col === 1){
            area++;
        }
    }
}

console.log(area)