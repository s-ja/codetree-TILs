const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

const a = Number(input)

if(a>=3 && a<=5){
    console.log("Spring")
}else if(a>=6 && a<=8){
    console.log("Summer")
}else if(a>=9 && a<=11){
    console.log("Fall")
}else{
    console.log("Winter")
}