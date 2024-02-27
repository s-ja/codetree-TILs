const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let n = Number(input)

let result = []

while(true){
    if(n % 2 === 0){
        result.push(n)
        n = Math.floor(n / 2)
        // console.log(n, result)
    }else if(n % 3 === 0){
        result.push(n)
        n = Math.floor(n / 3)
        // console.log(n, result)
    }else{
        break
    }
    if(n === 1){
        break
    }
}

if(result.length > 1){
    console.log("C")
}else{
    console.log("N")
}