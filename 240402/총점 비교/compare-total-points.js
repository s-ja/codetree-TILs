const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input.shift())

class Student{
    constructor(name, a, b, c){
        this.name = name;
        this.a = a;
        this.b = b;
        this.c = c;
    }
}

const students = []

for(elem of input){
    const arr = elem.split(" ")
    const name = arr[0]
    const a = Number(arr[1])
    const b = Number(arr[2])
    const c = Number(arr[3])
    students.push(new Student(name, a, b, c))
}

function cmp(a, b){
    return((a.a + a.b + a.c) - (b.a + b.b + b.c))
}

students.sort(cmp)

for(elem of students){
    console.log(elem.name, elem.a, elem.b, elem.c)
}