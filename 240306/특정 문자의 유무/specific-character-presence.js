const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let str = ""
let ee = ""
let ab = ""

if(input.includes("ee")){
    ee = "Yes"
}else{
    ee = "No"
}

if(input.includes("ab")){
    ab = "Yes"
}else{
    ab = "No"
}

console.log(ee, ab)