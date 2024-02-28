const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

for(let i = 0; i < n; i++){
    let str = ""
    for(let j = 0; j < n - 1 - i; j++){
        str += " ";
    }
    for(let j = 0; j < i * 2 + 1; j++){
        str += "*";
    }
    console.log(str)
}
for(let i = 1; i < n; i++){
    let str = ""
    for(let j = 0; j < i; j++){
        str += " ";
    }
    for(let j = 0; j < n - (i * 2) + 2; j++){
        str += "*";
    }
    console.log(str)
}