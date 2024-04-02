const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const [m1, d1, m2, d2] = input

const weekDay = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

const thirtyOne = [1, 3, 5, 7, 8, 10, 12]

let elapsed1 = 0
let elapsed2 = 0

for(let i = 1; i < m1; i++){
    if(i === 2){
        elapsed1 += 28
    }else if(thirtyOne.includes(i)){
        elapsed1 += 31
    }else{
        elapsed1 += 30
    }
}

elapsed1 += d1

for(let i = 1; i < m2; i++){
    if(i === 2){
        elapsed2 += 28
    }else if(thirtyOne.includes(i)){
        elapsed2 += 31
    }else{
        elapsed2 += 30
    }
}

elapsed2 += d2

// console.log(elapsed1) // m1d1
// console.log(elapsed2) // m2d2

let diff = 0
diff = elapsed2 - elapsed1

// if(elapsed1 > elapsed2){
//     diff = elapsed2 - elapsed1
// }else{
//     diff = elapsed1 - elapsed2
// }

// console.log(diff % 7)
console.log(weekDay.at(diff))