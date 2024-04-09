const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input.shift())

let x = 0;
let y = 0;

for(elem of input){
    let dir = elem.split(" ")[0]
    let leng = Number(elem.split(" ")[1])
    if(dir === "N"){
        y += leng
    }else if(dir === "E"){
        x += leng
    }else if(dir === "W"){
        x -= leng
    }else if(dir === "S"){
        y -= leng
    }
}

console.log(x, y)