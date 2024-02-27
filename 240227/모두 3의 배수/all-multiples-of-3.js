const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let result = false;

for(let i = 0; i < input.length; i++){
    if(Number(input[i]) % 3 === 0){
        result = true;
    }else{
        result = false;
    }
}

if(result === true){
    console.log(1)
}else{
    console.log(0)
}