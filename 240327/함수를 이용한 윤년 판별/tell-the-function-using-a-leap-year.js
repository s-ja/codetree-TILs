const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const year = Number(input)

console.log(isLeapYear(year))

function isLeapYear(n){
    if(n % 4 === 0){
        if(n % 100 === 0 && n % 400 !== 0){
            return false
        }
        return true
    }
    return false
}