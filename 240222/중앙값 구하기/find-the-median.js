const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

let arr = []

input.forEach((i)=>{
    arr.push(Number(i))
})

// let result = []

let result = [arr[0]]

for(let i = 0; i<arr.length; i++){
    if(arr[i+1]===undefined){
        break
    }
    if(result[i]<arr[i+1]){
        result.push(arr[i+1])
    }else{
        result.unshift(arr[i+1])
    }
}

console.log(result[1])

// if(arr[0]<arr[1]){
//     if(arr[0]<arr[2]){
//         result.push(arr[0])
//     }else if(arr[1]<arr[2]){
//         result.push(arr[1])
//     }else{
//         result.push(arr[2])
//     }
// }else{
    
// }


// console.log(result[1])