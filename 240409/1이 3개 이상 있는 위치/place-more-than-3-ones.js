const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift())

// console.log(n)
// console.log(input)

const matrix = []

for(let i = 0; i < n; i++){
    const row = input[i].split(' ').map(Number)
    matrix.push(row)
}

// console.log(matrix)

let cnt = 0;

for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        if(finder(i, j)){
            cnt++
        }
    }
}

// const dx = [0, 1, 0, -1];
// const dy = [1, 0, -1, 0];

function finder(x, y){
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    
    let cnt = 0;

    for(let dirNum = 0; dirNum < 4; dirNum++){
        let nx = x + dx[dirNum];
        let ny = y + dy[dirNum];
        if(inRange(nx, ny) && matrix[nx][ny] === 1){
            cnt++
        }
    }

    // console.log(cnt)
    if(cnt >= 3){
        return true
    }else{
        return false
    }
}

function inRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n;
}


console.log(cnt)