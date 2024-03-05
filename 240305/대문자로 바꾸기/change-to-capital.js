const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

for(let i = 0; i < input.length; i++){
    let arr = input[i].split(" ")
    let result = ""
    for(let j = 0; j < arr.length; j++){
        result += arr[j].toUpperCase() + " "
    }
    console.log(result)
}