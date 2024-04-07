const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number)

const aTrack = input.splice(0, n)
const bTrack = input.splice(0, m)

// console.log(n, m)
// console.log(aTrack)
// console.log(bTrack)

function tracer(arr){
    const race = []
    let currPosition = 0
    for(let elem of arr){
        const [speed, time] = elem.split(' ').map(Number)
        for(let i = 0; i < time; i++){
            currPosition += speed
            race.push(currPosition)
        }
    }
    return race
}

const aTrace = tracer(aTrack)
const bTrace = tracer(bTrack)

let fight = []

for(let i = 0; i < aTrace.length; i++){
    if(aTrace[i] > bTrace[i]){
        fight.push('a')
    }else if(aTrace[i] < bTrace[i]){
        fight.push('b')
    }
}

// console.log(fight)

let cnt = 0

for(let i = 1; i < fight.length; i++){
    if(fight[i] !== fight[i - 1]){
        cnt++
    }
}

console.log(cnt)