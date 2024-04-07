const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number)

const aTrack = input.splice(0, n);

const bTrack = input.splice(0, m)

// console.log(n, m)
// console.log(aTrack)
// console.log(bTrack)

function tracer(arr){
    let curr = 0;
    const trace = []
    for(let elem of arr){
        let [direction, length] = elem.split(' ')
        length = Number(length)
        if(direction === 'L'){
            for(let i = 0; i < length; i++){
                curr--;
                trace.push(curr)
            }
        }else{
            for(let i = 0; i < length; i++){
                curr++;
                trace.push(curr)
            }
        }
    }
    return trace
}

const aTrace = tracer(aTrack);
const bTrace = tracer(bTrack);

let crossPoint = -1;

for(let i = 0; i < aTrace.length; i++){
    if(aTrace[i] === bTrace[i]){
        crossPoint = i + 1
        break
    }
}

console.log(crossPoint)