const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

if(input>=1.0){
    console.log('High')
}else if(input>=0.5 && input<1.0){
    console.log('Middle')
}else{
    console.log('Low')
}