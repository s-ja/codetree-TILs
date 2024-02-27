const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

const n = Number(input)

// if(n !== 6 || n % 2 !== 0 || n % 3 !== 0){
//     console.log("N")
// }else{
//     console.log("C")
// }

if(n === 2 || n / 2 > 0 || n / 3 > 0){
    console.log("N")
}else{
    console.log("C")
}