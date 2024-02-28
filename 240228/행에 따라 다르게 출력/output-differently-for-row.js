const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin").toString().trim());

let str = ""
let cnt = 0

for(let i = 0; i < n; i++){
    str = ""
    if(i % 2 === 0){
        for(let j = 0; j < n; j++){
            str += (cnt+1) + " "
            cnt ++
        }
        console.log(str)
        // console.log("짝수 : "+cnt)
    }else{
        for(let j = 0; j < n; j++){
            str += (cnt + 2) + " " 
            cnt += 2
        }
        console.log(str)
        // console.log("홀수 : "+cnt)
    }
    // console.log(str)
}