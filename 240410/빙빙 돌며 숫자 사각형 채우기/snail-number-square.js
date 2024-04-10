const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

const [n, m] = input

let matrix = []

for(let i = 0; i < n; i++){
    matrix[i] = []
    for(let j = 0; j < m; j++){
        matrix[i][j] = 0
    }
}

// console.log(matrix)

function inRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < m;
}
const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];
let x = 0, y = 0
let dirNum = 0
matrix[x][y] = 1

for(let i = 2; i <= n * m; i++){
    let nx = x + dx[dirNum], ny = y + dy[dirNum];

    if(!inRange(nx, ny) || matrix[nx][ny] !== 0){
        dirNum = (dirNum + 1) % 4
    }
    x += dx[dirNum]
    y += dy[dirNum]
    matrix[x][y] = i;
}

for (let i = 0; i < n; i++) {
    let print = "";
    for (let j = 0; j < m; j++) {
        print += `${matrix[i][j]} `;
    }
    console.log(print);
}