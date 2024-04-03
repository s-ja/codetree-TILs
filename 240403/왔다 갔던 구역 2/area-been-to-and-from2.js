const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const OFFSET = 1000;
const MAX_R = 2000;

// const n = Number(input.shift())
const n = Number(input[0])
const segments = []

let cur = 0

for(let i = 1; i <= n; i++){
    let [distance, direction] = input[i].split(' ')
    distance = Number(distance)

    let sectionL, sectionR;
    if(direction === 'L'){
        sectionL = cur - distance
        sectionR = cur
        cur -= distance
    }else{
        sectionL = cur
        sectionR = cur + distance
        cur += distance
    }

    segments.push([sectionL, sectionR])
}

// console.log(segments)

const checked = Array(MAX_R + 1).fill(0)

segments.forEach(segment => {
    let [x1, x2] = segment

    x1 += OFFSET
    x2 += OFFSET

    for(let i = x1; i < x2; i++){
        checked[i] += 1;
    }
})

let cnt = 0

for(let elem of checked){
    if(elem >= 2){
        cnt += 1
    }
}

console.log(cnt)