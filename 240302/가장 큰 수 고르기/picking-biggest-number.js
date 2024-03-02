let fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let i = input[0]

for(a of input){
    if(a > i){
        i = a;
    }
}


console.log(i)