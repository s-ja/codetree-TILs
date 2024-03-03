const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0])
const arr = input[1].split(" ").map(Number)

const counts = {};

for (const number of arr) {
    counts[number] = (counts[number] || 0) + 1;
}

let maxUnique = -1;

for(const number in counts){
    if(counts[number] === 1){
        maxUnique = Math.max(maxUnique, number)
    }
}

console.log(maxUnique)