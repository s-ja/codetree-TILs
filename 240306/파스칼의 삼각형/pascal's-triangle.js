const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let arr2d = Array(n).fill(0).map(() => Array(n).fill(0));

for(let i = 0; i < n; i++){
    arr2d[i][0] = 1;
}

for(let i = 1; i < n; i++){
    for(let j = 1; j <= i; j++){
        arr2d[i][j] = arr2d[i - 1][j - 1] + arr2d[i - 1][j]
    }
}

for(let i = 0; i < arr2d.length; i++){
    let str = ""
    for(let j = 0; j < arr2d[i].length; j++){
        if(arr2d[i][j] !== 0){
            str += arr2d[i][j] + " "
        }
    }
    console.log(str)
}