const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let rowAvg = ""
let colAvg = ""
let totalAvg = 0

let arr = []

for(let i = 0; i < input.length; i++){
    arr.push(input[i].split(" ").map(Number))
}


for(let j = 0; j < arr.length; j++){
    let rowTmp = 0
    for(let k = 0; k < arr[j].length; k++){
        rowTmp += arr[j][k]
        totalAvg += arr[j][k]
    }
    rowAvg += (rowTmp / arr[j].length).toFixed(1) + " "
}

for(let k = 0; k < arr[0].length; k++){
    let colTmp = 0
    for(let l = 0; l < arr.length; l++){
        colTmp += arr[l][k]
    }
    colAvg += (colTmp / arr.length).toFixed(1) + " "
}

console.log(rowAvg)
console.log(colAvg)
console.log((totalAvg / 8).toFixed(1))