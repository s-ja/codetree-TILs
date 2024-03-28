const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

console.log(solution(input))

function solution(input){
    const [M, D] = input
    if(isRightDay(M, D)){
        return "Yes"
    }else{
        return "No"
    }
}

function isRightDay(m, d){
    const thirtyOne = [1, 3, 5, 7, 8, 10, 12]
    
    if(m > 12 || m < 0){
        return false
    }else if(m === 2){
        if(d > 28){
            return false
        }else{
            return true
        }
    }else if(thirtyOne.includes(m)){
        if(d > 31){
            return false
        }else{
            return true
        }
    }else{
        if(d > 30){
            return false
        }else{
            return true
        }
    }
}