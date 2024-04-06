const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

const n = input.shift()

if(input.length < 2){
    console.log(1)
}else{
    let curr = 1;
    let maxCnt = 0;

    for(let i = 1; i < n; i++){
        if(input[i - 1] < input[i]){
            curr++;
        }else{
            curr = 1;
        }

        maxCnt = Math.max(maxCnt, curr);
    }

    console.log(maxCnt)
}