let fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0])

const arr = input[1].split(" ").map(Number)

let result = arr[0]
let cnt = 0
for(a of arr){
    if(a < result){
        result = a;
    }
}
for(a of arr){
    if(a === result){
        cnt++;
    }
}

console.log(result, cnt)