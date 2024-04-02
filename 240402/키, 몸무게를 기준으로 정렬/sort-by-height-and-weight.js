const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input.shift())

class User{
    constructor(name, height, weight){
        this.name = name
        this.height = height
        this.weight = weight
    }
}

const users = []

for(elem of input){
    let [name, height, weight] = elem.split(" ")
    height = Number(height)
    weight = Number(weight)
    users.push(new User(name, height, weight))
}

function cmp(prev, curr){
    if(prev.height === curr.height){
        return curr.weight - prev.weight
    }else{
        return prev.height - curr.height
    }
}

users.sort(cmp)

users.forEach(elem => console.log(elem.name, elem.height, elem.weight))