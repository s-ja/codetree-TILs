const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const OFFSET = 1000
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

const points = []

for(let i = 0; i < MAX_R; i++){
    for(let j = 0; j < MAX_R; j++){
        if(matrix[i][j] === 1){
            points.push([i, j])
        }   
    }
}

// console.log(points)
// console.log(points[0])
// console.log(points.at(-1))

let minX = points[0][0];
let minY = points[0][1];
let maxX = 0;
let maxY = 0;

for(elem of points){
    if(elem[0] > maxX){
        maxX = elem[0]
    }
    if(elem[0] < minX){
        minX = elem[0]
    }
    if(elem[1] > maxY){
        maxY = elem[1]
    }
    if(elem[1] < minY){
        minY = elem[1]
    }
}

// console.log(minX, minY, maxX, maxY)
console.log(((maxX + 1) - minX) * ((maxY + 1) - minY))