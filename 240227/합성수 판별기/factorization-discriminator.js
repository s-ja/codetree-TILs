const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let n = Number(input);
let result = false;

for(let i = 2; i < n; i++){
    if(n % i === 0){
        result = true
    }
}

if (result === true) {
    console.log("C");
}
else {
    console.log("N");
}