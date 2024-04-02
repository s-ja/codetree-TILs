const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(" ").map(Number)
const weekDay = input[1]

const week  = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

const thirtyOne = [1, 3, 5, 7, 8, 10, 12]

function elapsed(m, d){
    let elapsedDay = 0

    for(let i = 1; i < m; i++){
        if(i === 2){
            elapsedDay += 29
        }else if(thirtyOne.includes(i)){
            elapsedDay += 31
        }else{
            elapsedDay += 30
        }
    }

    elapsedDay += d
    return elapsedDay
}

// console.log(elapsed(m1, d1), elapsed(m2, d2))
const diff = elapsed(m2, d2) - elapsed(m1, d1) + 1
const index = week.indexOf(weekDay)
// console.log(diff)
// console.log(parseInt(diff / 7), diff % 7)
// console.log(index)
let cnt = 0

for(let i = 0; i < diff; i++){
    // console.log(i ,week[i % 7])
    if(i % 7 === index){
        cnt++
    }
}

console.log(cnt)