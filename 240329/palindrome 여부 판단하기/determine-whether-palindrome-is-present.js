const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

console.log(isPalindrome(input));

function isPalindrome(str){
    let result = false
    for(let i = 0; i < str.length; i++){
        if(str[i] === str[str.length - i - 1]){
            result = true
        }else{
            result = false
        }
    }
    if(result){
        return "Yes"
    }else{
        return "No"
    }
}