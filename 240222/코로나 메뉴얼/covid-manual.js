const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

// const a = input[0].split(' ')
// const b = input[1].split(' ')
// const c = input[2].split(' ')

// const arr = [a,b,c]
let arr = []
let stack = 0
input.forEach((i)=>{
    arr.push(i.split(' '))
})

arr.forEach((i)=>{
    if(i[0]==='Y'){
        if(i[1]>37){
            stack += 1
        }
    }
})

if(stack>1){
    console.log("E")
}else{
    console.log("N")
}