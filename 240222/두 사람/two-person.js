const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const [a,b] = input[0].split(' ')
const [c,d] = input[1].split(' ')

// console.log(a,b,c,d)

if(a>=19 || c>19){
    if(b==='M'||d==='M'){
        console.log(1)
    }else{
        console.log(0)
    }
}else {
    console.log(0)
    }