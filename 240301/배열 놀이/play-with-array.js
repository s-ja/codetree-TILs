const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, q] = input[0].split(" ").map(Number)

let atom = []

for(a of input[1].split(" ")){
    atom.push(Number(a))
}

// console.log(atom)

for(let i = 2; i < q + 2; i++){
    let tmp = input[i].split(" ").map(Number)
    if(tmp[0] === 1){
        console.log(atom[tmp[1] - 1])
    }else if(tmp[0] === 2){
        let idx = 0
        for(a of atom){
            if(a === tmp[1]){
                idx = (atom.indexOf(tmp[1]) + 1)
            }
        }
        console.log(idx)
    }else if(tmp[0] === 3){
        let str = "";
        for(let i = tmp[1] - 1; i < tmp[2]; i++){
            str += atom[i] + " "
        }
        console.log(str)
    }
}