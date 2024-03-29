const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

console.log(solution(input));

function solution(str){
    const arr = str.split("")
    let cnt = 0
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] !== arr[i + 1]){
            cnt++
        }
    }
    
    if(cnt >= 1){
        return "Yes"
    }else{
        return "No"
    }
}