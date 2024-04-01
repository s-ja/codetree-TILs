const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input.shift())

class User{
    constructor(name, number, region){
        this.name = name;
        this.number = number;
        this.region = region;
    }
}

const users = []

for(elem of input){
    users.push(new User(...elem.split(" ")))
}

let result = users[0]

for(elem of users){
    if(elem.name > result.name){
        result = elem
    }else{
        continue
    }
}

console.log(`name ${result.name}`)
console.log(`addr ${result.number}`)
console.log(`city ${result.region}`)