const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

const a = Number(input);

let result = '';
let i = 1;
while(i <= a){
    result += (i + " ");
    i++;
}

console.log(result)