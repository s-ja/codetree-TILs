const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

console.log(solution(input));

function solution(str){
    const arr = str.split("")
    let tmp = arr[0]
    let cnt = 0
    for(elem of arr){
        if(elem !== tmp){
            cnt++
            tmp = elem
        }
    }
    if(cnt > 2){
        return "Yes"
    }else{
        return "No"
    }
}