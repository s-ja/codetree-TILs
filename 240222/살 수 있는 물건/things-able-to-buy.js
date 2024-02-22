const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

if(input>=3000){
    console.log('book')
}else if(input>=1000 && input<3000){
    console.log('mask')
}else{
    console.log('no')
}