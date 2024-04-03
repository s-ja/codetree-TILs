const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

// console.log(input)

const n = Number(input.shift())
const commands = []
input.forEach((command) => {
    const [leng, dir] = command.split(" ")
    const length = Number(leng)
    commands.push([length, dir])
})
// console.log(commands)

const arr = Array(n * 10).fill(0)
let pointer = (n * 10) / 2
let acc = 0

for(const command of commands){
    if(acc < 1){
        // console.log("before : " + pointer)
        for(let i = 0; i < command[0]; i++){
            if(command[1] === "L"){
                pointer--
            }else{
                pointer++
            }
            // console.log("pointer : " + pointer)
            arr[pointer]++
            // console.log(arr)
        }
        // console.log(arr)
        // console.log("after : " + pointer)
        acc++
    }else{
        // console.log("before : " + pointer)
        for(let i = 0; i < command[0]; i++){
            arr[pointer]++
            if(command[1] === "L"){
                pointer--
            }else{
                pointer++
            }
            // console.log("pointer : " + pointer)
            // console.log(arr)
        }
        // console.log("after : " + pointer)
        acc++
    }
}

let cnt = 0

for(elem of arr){
    if(elem > 1){
        cnt++
    }
}

console.log(cnt)