const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0])
const b = Number(input[1])
// let result = 0

// for(let i=1; i<=20; i++){
//     result = Math.floor((a/b)/(10*i))/(10*i)
//     a = a - (b*result)
// }

let result = ""
for(let i=1; i<=20; i++){
    if(b>a){
        result += "0"
        a = a * 10
        result += Math.floor(a/b)
        a = (a%b)*10
    }else{
        result += Math.floor(a/b)
        a = (a%b)*10
    }
}
// result = Number(result) / 10**20
if(result[0]==0){
    let final = result.slice(1,21)
    result = "0." + final
}else{
    let final = result.slice(1,20)
    result = "1." + final
}

console.log(result)