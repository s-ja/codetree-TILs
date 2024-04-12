const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const N = Number(input.shift())

// console.log(N)
// console.log(input)

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
    'W': 3,
    'S': 2,
    'N': 0,
    'E': 1
};

const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];
let x = 0, y = 0
let cnt = 0;

for(let elem of input){
    let [dir, length] = elem.split(' ');
    length = Number(length)
    let direction = mapper[dir];
    let off = false

    for(let i = 0; i < length; i++){
        x += dx[direction]
        y += dy[direction]
        // console.log(x, y)
        cnt++
        if(x === 0 && y === 0){
            off = true
            // console.log(x, y)
            break
        }
    }

    if(off){
        break
    }
}

// console.log(cnt)
if(cnt === N && x !== 0 && y !== 0){
    console.log(-1)
}else{
    console.log(cnt)
}