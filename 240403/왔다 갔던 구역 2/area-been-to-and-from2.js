const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

// console.log(input)

const n = Number(input.shift())

const commands = input.map(command => {
    const [distance, direction] = command.split(' ');
    return [parseInt(distance, 10), direction];
});

// console.log(commands)


const arr = new Array(n * 10 * 2).fill(0);
let pointer = n * 10

for (let i = 0; i < commands.length; i++) {
    if(i < 1){
        // console.log("case0 : " + pointer)
        for(let j = 0; j < commands[i][0]; j++){
            arr[pointer]++
            if(commands[i][1] === 'L'){
                pointer--
            }else{
                pointer++
            }
        }
        // console.log("case0 : " + arr)
    }else if(i > 1 && commands[i - 1][1] === commands[i][1]){
        // console.log("case1 : " + pointer)
        for(let j = 0; j < commands[i][0]; j++){
            if(commands[i][1] === 'L'){
                pointer--
            }else{
                pointer++
            }
            arr[pointer]++
        }
        // console.log("case1 : " + arr)
    }else{
        // // console.log("case2 : " + pointer)
        for(let j = 0; j < commands[i][0]; j++){
            arr[pointer]++
            if(commands[i][1] === 'L'){
                pointer--
            }else{
                pointer++
            }
        }
        // console.log("case2 : " + arr)
    }
}

let cnt = 0

for(elem of arr){
    if(elem > 1){
        cnt++
    }
}

console.log(cnt)