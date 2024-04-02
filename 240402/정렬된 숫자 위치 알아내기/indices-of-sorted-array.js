const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input.shift())

input = input[0].split(" ").map(Number)

class Position{
    constructor(num, position1, position2 = 0){
        this.num = num
        this.position1 = position1
        this.position2 = position2
    }
}

const arr = []

for(let i = 0; i < n; i++){
    arr.push(new Position(input[i], i + 1))
}

// console.log(arr)
arr.sort((prev, curr) => prev.num - curr.num)

// console.log(arr)
for(let i = 0; i < n; i++){
    arr[i].position2 = i + 1
}

// console.log(arr)
arr.sort((prev, curr) => prev.position1 - curr.position1)

let answer = ""

arr.forEach(elem => answer += elem.position2 + " ")

console.log(answer)