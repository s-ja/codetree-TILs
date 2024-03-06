const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [s, q] = input.shift().split(" ")

s = s.split("")
q = Number(q) 

const arr = []

for(let i = 0; i < input.length; i++){
    arr.push(input[i].split(" "))    
}

for(let i = 0; i < q; i++){
    if(arr[i][0] === "1"){
        let a = s[arr[i][1] - 1]
        let b = s[arr[i][2] - 1]
        s[arr[i][1] - 1] = b
        s[arr[i][2] - 1] = a
        console.log(s.join(""))
    }else if(arr[i][0] === "2"){
        for(let j = 0; j < s.length; j++){
            if(s[j] === arr[i][1]){
                s[j] = arr[i][2]
            }
        }
        console.log(s.join(""))
    }
}