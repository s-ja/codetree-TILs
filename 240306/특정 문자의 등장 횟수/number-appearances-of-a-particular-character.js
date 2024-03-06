const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let ee = 0
let eb = 0

for(let i = 0; i < input.length - 1; i++){
    if(input[i] === "e" && input[i + 1] === "e"){
        ee++
    }else if(input[i] === "e" && input[i + 1] === "b"){
        eb++
    }
}

console.log(ee, eb)