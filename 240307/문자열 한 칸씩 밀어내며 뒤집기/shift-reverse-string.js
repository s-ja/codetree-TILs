const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [str, q] = input.shift().split(" ")

// const arr = input.map(Number)

for(a of input){
    if(a === "1"){
        str = str.slice(1) + str.slice(0, 1)
        console.log(str)
    }else if(a === "2"){
        str = str.slice(-1) + str.slice(0, str.length - 1)
        console.log(str)
    }else if(a === "3"){
        tmp = []
        for(let i = str.length - 1; i >= 0; i--){
            tmp.push(str[i])
        }
        str = tmp.join("")
        console.log(str)
    }
}