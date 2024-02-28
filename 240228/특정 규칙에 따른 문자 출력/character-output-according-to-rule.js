const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

for(let i = 1; i <= n; i++){
    let str = ""
    for(let j = 0; j < (n - i) * 2; j++){
        str += " "
    }
    for(let j = 0; j < i; j++){
        str += "@" + " "
    }
    console.log(str)
}
for(let i = 1; i < n; i++){
    let str = ""
    for(let j = 0; j < (n - i); j++){
        str += "@" + " "
    }
    for(let j = 0; j < i * 2; j++){
        str += " "
    }
    console.log(str)
}