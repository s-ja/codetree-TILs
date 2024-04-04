const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const OFFSET = 1000;
const MAX_R = 2000;

const matrix = Array.from({length : MAX_R + 1}, ()=>Array(MAX_R + 1).fill(0))

const first = input[0].split(' ').map((x)=> Number(x) + OFFSET)
const second = input[1].split(' ').map((x)=> Number(x) + OFFSET)

function paint(arr, num){
    const [x1, y1, x2, y2] = arr

    for(let i = x1; i < x2; i++){
        for(let j = y1; j < y2; j++){
            matrix[i][j] = num;
        }
    }
}

paint(first, 1);
paint(second, 2);

const height = []

for(let i = 0; i < MAX_R; i++){
    let width = 0;
    for(let j = 0; j < MAX_R; j++){
        if(matrix[i][j] === 1){
            width++
        }   
    }
    if(width > 0){
        height.push(width)
    }
}

// console.log(height)

console.log(height.length * Math.max(...height))