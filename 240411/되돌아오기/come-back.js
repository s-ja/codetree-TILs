const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const N = Number(input.shift())

console.log(N)
console.log(input)

const maxNum = 100 * 10

const matrix = []

for(let i = 0; i < maxNum; i++){
    matrix[i] = []
    for(let j = 0; j < maxNum; j++){
        matrix[i][j] = 0
    }
}

function inRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < m;
}

const mapper = {
    'W': 0,
    'S': 1,
    'N': 2,
    'E': 3
};

let direction = mapper[d];
const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];
let x = 0, y = 0

for(let elem of input){
    let [dir, length] = input.split(' ');
    length = Number(length)
    console.log(dir, length)
}