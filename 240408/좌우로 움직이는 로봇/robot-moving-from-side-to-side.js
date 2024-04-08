const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number)

const aTrack = input.splice(0, n)
const bTrack = input.splice(0, m)

// console.log(aTrack)
// console.log(bTrack)

function tracer(arr){
    const trace = []
    let curr = 0;
    for(let elem of arr){
        let [t, d] = elem.split(' ')
        t = Number(t)
        for(let i = 0; i < t; i++){
            if(d === 'L'){
                curr--
            }else{
                curr++
            }
            trace.push(curr)
        }
    }
    return trace
}

const aTrace = tracer(aTrack)
const bTrace = tracer(bTrack)

function tracer2(arr){
    const trace = Array(1000000).fill(0)
    let curr = 0;
    for(let i = 0; i < trace.length; i++){
        if(arr[i] !== undefined){
            curr = arr[i]
            trace[i] = curr
        }else{
            trace[i] = curr
        }
    }
    return trace
}

const aTrace2 = tracer2(aTrace)
const bTrace2 = tracer2(bTrace)
const crossPoint = []

for(let i = 0; i < aTrace2.length; i++){
    if(aTrace2[i] === bTrace2[i]){
        crossPoint.push(2)
    }else{
        crossPoint.push(1)
    }
}

let result = 0;

for(let i = 1; i < crossPoint.length; i++){
    if((crossPoint[i - 1] !== crossPoint[i]) && crossPoint[i - 1] === 1){
        result++
    }
}

console.log(result)