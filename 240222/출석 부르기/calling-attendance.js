const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

if(input == 1){
    console.log('John')
}else if(input == 2){
    console.log('Tom')
}else if(input == 3){
    console.log('Paul')
}else {
    console.log("Vacancy")
}