const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

// console.log(input)

let [a,b]  = input[0].split(' ')
let [c,d]  = input[1].split(' ')

// console.log(a,b,c,d)

// [a,b] = [Number(a), Number(b)]
// [c,d] = [Number(c), Number(d)]

if(a === c){
    if(b>d){
        console.log("A")
    }else{
        console.log("B")
    }
}else if(a>c){
    console.log("A")
}else {
    console.log("B")
}