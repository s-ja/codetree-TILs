const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0])

const str = input[1].split(" ").join("")

// console.log(Math.floor(str.length / 5), str.length % 5)

for(let i = 0; i < str.length; i += 5){
    let result = ""
    for(let j = i; j < i + 5; j++){
        if(str[j]){
            result += str[j]
        }
    }
    console.log(result)
}