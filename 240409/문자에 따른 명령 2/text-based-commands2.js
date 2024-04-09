const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('');

let dirNum = 3;

let x = 0;
let y = 0;

const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

for(let elem of input){
    if(elem === 'L'){
        dirNum = (dirNum - 1 + 4) % 4
    }else if(elem === 'R'){
        dirNum = (dirNum + 1) % 4
    }else{
        x += dx[dirNum]
        y += dy[dirNum]
    }
}

console.log(x, y)