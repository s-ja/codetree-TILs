const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

// console.log(input)

const n = Number(input.shift())

const arr = Array(n * 10).fill(0)
let curr = (n * 10) / 2
// console.log(arr.length, curr)
let cnt = 0

for(elem of input){
    const [leng, dir] = elem.split(' ')
    const length = Number(leng)
    for(let i = 0; i < length; i++){
        arr[curr]++
        // console.log('command start : ' + arr)
        // console.log('command start : ' + curr)

        if(dir === "L"){
            curr--
            // console.log('curr : ' + curr)
        }else{
            curr++
            // console.log('curr : ' + curr)
        }
        // console.log(curr)
    }
    // console.log("cut")
    // console.log('command end : ' + arr)
}

for(elem of arr){
    if(elem > 1){
        cnt++
    }
}

console.log(cnt)
// console.log(arr)