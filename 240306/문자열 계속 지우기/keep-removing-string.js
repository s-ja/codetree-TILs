const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let a = input[0].split("")
const b = input[1].split("")

for(let i = 0; i < a.length; i++){
    if(a.join("") === b.join("")){
        a = []
        break
    }
    
    let tmp = ""
    for(let j = 0; j < b.length; j++){
        if(a[i + j] === b[j]){
            tmp += a[i + j]
        }
    }
    // console.log("j 반복문을 다 돌고 나서 쌓인 tmp : " + tmp)
    if(tmp === b.join("")){
        // console.log("tmp 와 b가 일치할 때의 i : " + i)
        a.splice(i, b.length)
        i = -1
    }
    // console.log("사이클이 한번 돌고 난 후의 a : " + a)
}

console.log(a.join(""))