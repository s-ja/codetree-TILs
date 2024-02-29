const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin").toString().trim());

let charCode = "A".charCodeAt()

for(let i = 0; i < n; i++){
    let str = ""
    for(let j = 0; j < i * 2; j++){
        str += " "
    }
    for(let j = n - i; j > 0; j--){
        str += String.fromCharCode(charCode) + " "
        charCode++
        if(charCode > "Z".charCodeAt()){
            charCode = "A".charCodeAt()
        }
        // console.log(str)
    }
    console.log(str)

}