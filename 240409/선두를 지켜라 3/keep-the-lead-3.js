const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number)

const aTrack = input.splice(0, N)
const bTrack = input.splice(0, M)

// console.log(aTrack)
// console.log(bTrack)

function tracer(arr){
    const trace = []
    let distance = 0
    for(let elem of arr){
        const [speed, time] = elem.split(' ').map(Number)
        for(let i = 0; i < time; i++){
            distance += speed
            trace.push(distance)
        }
    }

    return trace
}

const aTrace = tracer(aTrack)
const bTrace = tracer(bTrack)

const first = []

for(let i = 0; i < aTrace.length; i++){
    if(aTrace[i] > bTrace[i]){
        first.push(1)
    }else if(aTrace[i] < bTrace[i]){
        first.push(2)
    }else{
        first.push(3)
    }
}

let cnt = 1

// console.log(first)

for(let i = 1; i < first.length; i++){
    if(first[i - 1] !== first[i]){
        cnt++
    }
}

console.log(cnt)