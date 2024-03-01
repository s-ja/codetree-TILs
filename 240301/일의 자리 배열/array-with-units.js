const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let str = ""
let arr = Array(10)
arr[0] = Number(input[0])
arr[1] = Number(input[1])

for (let i = 2; i < arr.length; i++){
    arr[i] = arr[i-1] + arr[i-2]
}

// console.log(arr)
for(a of arr){
    if(a >= 10){
        let tmp = a.toString()
        str += tmp[tmp.length - 1] + " "
        // console.log(tmp[tmp.length - 1])
    }else{
        str += a + " "
    }

}

console.log(str)