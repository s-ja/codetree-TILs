const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

// console.log(input)

// const OFFSET = 1000 * 100
const OFFSET = 10
const MAX_R = OFFSET * 2

const n = Number(input[0])

const segments = []

let cur = 0

for(let i = 1; i <= n; i++){
    let [distance, direction] = input[i].split(' ')
    distance = Number(distance)
    let sectionLeft, sectionRight, color;
    if(direction === 'L'){
        sectionLeft = cur - distance
        sectionRight = cur
        cur -= distance
        color = 'white'
    }else{
        sectionLeft = cur
        sectionRight = cur + distance
        cur += distance
        color = 'black'
    }

    segments.push([sectionLeft, sectionRight, color])
}

// console.log(segments)

const painted = Array.from({ length: MAX_R + 1 }, () => [0, 0, null]);
// painted[i][0] = 흰색이 칠해진 횟수
// painted[i][1] = 검은색이 칠해진 횟수

segments.forEach(segment => {
    let [x1, x2, color] = segment
    // console.log(x1, x2, color)
    x1 += OFFSET
    x2 += OFFSET

    for(let i = x1; i < x2; i++){
        if(color === 'white'){
            painted[i][0] += 1
            painted[i][2] = "white"
        }else{
            painted[i][1] += 1
            painted[i][2] = "black"
        }
    }
})

// console.log(painted)

let white = 0
let black = 0
let grey = 0

painted.forEach(([whiteCount, blackCount, currentColor]) => {
    if(whiteCount !== 0 || blackCount !== 0){
        if(whiteCount >= 2 && blackCount >= 2){
            grey++
        }else if(currentColor === 'white'){
            white++
        }else if(currentColor === 'black'){
            black++
        }
    }
});

console.log(white, black, grey)