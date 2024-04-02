const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input.shift())

class Position{
    constructor(x, y, num){
        this.x = x
        this.y = y
        this.num = num
    }
}

const positions = []

for(let i = 0; i < n; i++){
    positions.push(new Position(...input[i].split(" ").map(Number), i + 1))
}

function cmp(prev, curr){
    return (Math.abs(prev.x) + Math.abs(prev.y)) - (Math.abs(curr.x) + Math.abs(curr.y))
}

positions.sort(cmp)

positions.forEach(elem => console.log(elem.num))