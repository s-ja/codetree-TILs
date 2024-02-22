const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

input = Number(input)

if(input%3===0){
    console.log("YES")
}else{
    console.log("NO")
}

if(input%5===0){
    console.log("YES")
}else{
    console.log("NO")
}