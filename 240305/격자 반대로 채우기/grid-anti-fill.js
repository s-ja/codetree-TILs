const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

const matrix = Array.from(Array(n), () => Array(n).fill(0));

let num = 1;

for(let i = n - 1; i >= 0; i--){
    for(let j = n - 1; j >= 0; j--){
        if((n - 1 - i) % 2 === 0){
            matrix[j][i] = num;
            num++
        }else{
            matrix[n - j - 1][i] = num;
            num++
        }
    }
}

for(let i = 0; i < matrix.length; i++){
    let str = ""
    for(let j = 0; j < matrix[i].length; j++){
        str += matrix[i][j] + " "
    }
    console.log(str)
}