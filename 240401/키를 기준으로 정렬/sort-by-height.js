const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input.shift())

class User{
    constructor(name, height, age){
        this.name = name;
        this.height = height;
        this.age = age;
    }
}

const users = []

for(elem of input){
    users.push(new User(...elem.split(" ")))
}

users.sort((prev, curr) => prev.height - curr.height)

for(elem of users){
    console.log(elem.name, elem.height, elem.age)
}