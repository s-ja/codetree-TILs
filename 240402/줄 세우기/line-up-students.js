const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input.shift())

class Student{
    constructor(height, weight, number){
        this.height = height
        this.weight = weight
        this.number = number
    }
}

const students = []

for(let i = 0; i < n; i++){
    students.push(new Student(...input[i].split(" ").map(Number), i + 1))
}

function cmp(prev, curr){
    if(prev.height === curr.height){
        if(prev.weight === curr.weight){
            return prev.number - curr.number
        }else{
            return curr.weight - prev.weight
        }
    }else{
        return curr.height - prev.height
    }
}

students.sort(cmp)

for(elem of students){
    console.log(elem.height, elem.weight, elem.number)
}