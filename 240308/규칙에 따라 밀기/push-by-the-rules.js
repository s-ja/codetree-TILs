const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let str = input[0]

const cmd = input[1]

for(let i = 0; i < cmd.length; i++){
    if(cmd[i] === "L"){
        str = str.slice(1) + str.slice(0,1)
    }else{
        str = str.slice(str.length - 1) + str.slice(0,str.length - 1)
    }
}

console.log(str)