const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input.shift())

class Student{
    constructor(name, kor, eng, math){
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }
}

const students = []

for(elem of input){
    students.push(new Student(...elem.split(" ")))
}

// console.log(students)

function cmp(a, b){
    if(a.kor === b. kor){
        if(a.eng === b.eng){
            return b.math - a.math
        }else{
            return b.eng - a.eng
        }
    }else{
        return b.kor - a.kor
    }
}

students.sort(cmp)

for(elem of students){
    console.log(elem.name, elem.kor, elem.eng, elem.math)
}