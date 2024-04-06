const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [n, t] = input[0].split(' ').map(Number)

const arr = input[1].split(' ').map(Number)

if(arr.length < 2){
    if(arr[0] > t){
        console.log(1)
    }else{
        console.log(0)
    }
}else{
    const continues = []
    for(let elem of arr){
        if(elem > t){
            continues.push(2)
        }else{
            continues.push(1)
        }
    }

    if(!continues.includes(2)){
        console.log(0)
    }else{
        let curr = 1;
        let maxCnt = 0;

        // console.log(continues)
        for(let i = 1; i < n; i++){
            if(continues[i] === 2 && continues[i - 1] === 2){
                curr++;
            }else{
                curr = 1;
            }
            maxCnt = Math.max(curr, maxCnt)
        }

        console.log(maxCnt)
    }
}