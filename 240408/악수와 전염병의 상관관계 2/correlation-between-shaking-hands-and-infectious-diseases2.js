const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [N, K, P, T] = input.shift().split(' ').map(Number)
// N = 인원 수 // 2 ≤ N ≤ 100
// K = 전염 유효 횟수 // 1 ≤ K ≤ 250
// P = 첫 보균자 // 1 ≤ P ≤ N
// T = 접촉 횟수 // 1 ≤ T ≤ 250

// console.log(N, K, P, T)
// console.log(input)
// input = t x y
// t = 접촉 시간 // 1 ≤ t ≤ 250
// x, y = 접촉자 2명

const timeLine = []

for(let elem of input){
    const [t, x, y] = elem.split(' ').map(Number)
    timeLine.push([t, x, y])
}

timeLine.sort((prev, curr)=> prev[0] - curr[0])

// const people = Array.from({length : N}, () => Array(10).fill(0))

// people[P - 1][0] = 2

const people = []

class Person{
    constructor(number, carrying, remain){
        this.number = number
        this.carrying = carrying
        this.remain = remain
    }
}

for(let i = 0; i < N; i++){
    if(i + 1 === P){
        people.push(new Person(i + 1, true, K))
    }else{
        people.push(new Person(i + 1, false, 0))
    }
}

// console.log(people[0].number)
// console.log(people)

for(let elem of timeLine){
    const time = elem[0]
    const x = elem[1] - 1
    const y = elem[2] - 1
    if(people[x].remain > 0){
        people[x].remain--
        if(people[y].carrying){
            people[y].remain--
        }else{
            people[y].carrying = true
            people[y].remain = K
        }
    }else if(people[y].remain > 0){
        people[y].remain--
        if(people[x].carrying){
            people[x].remain--
        }else{
            people[x].carrying = true
            people[x].remain = K
        }
    }
}

// console.log(people)

let result = ''

for(let elem of people){
    if(elem.carrying){
        result += 1
    }else{
        result += 0
    }
}

console.log(result)