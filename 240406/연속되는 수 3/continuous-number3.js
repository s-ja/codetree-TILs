const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

const n = input.shift()

const continues = []

for(elem of input){
    if(elem > 0){
        continues.push(1)
    }else{
        continues.push(2)
    }
}

// console.log(continues)

if(continues.length < 2){
    console.log(1)
}else{
    let maxCnt = 0;
    let currCnt = 1;

    for(let i = 1; i < n; i++){
        if(continues[i] === continues[i - 1]){
            currCnt++;
        }else{
            currCnt = 1;
        }

        maxCnt = Math.max(maxCnt, currCnt);
    }


    console.log(maxCnt)
}