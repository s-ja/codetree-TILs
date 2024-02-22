const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [a,b] = input[0].split(' ')
let [c,d] = input[1].split(' ')

a = Number(a)
c = Number(c)

// console.log(a,b,c,d)

// if(a>=19 || c>19){
//     if(b==='M'|| d==='M'){
//         console.log(1)
//     }else{
//         console.log(0)
//     }
// }else {
//     console.log(0)
//     }

if(a>=19){
    if(b === 'M'){
        console.log(1)
    }else if(c >= 19){
        if(d === 'M'){
            console.log(1)
        }else{
            console.log(0)
        }
    }else{
        console.log(0)
    }
}else{
    console.log(0)
}