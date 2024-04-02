const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

class User{
    constructor(name, height, weight){
        this.name = name
        this.height = height
        this.weight = weight
    }
}

const users = []

for(elem of input){
    const arr = elem.split(" ")
    const name = arr[0]
    const height = Number(arr[1])
    const weight = Number(arr[2])
    users.push(new User(name, height, weight))
}

function cmpName(prev, curr){
    if(prev.name > curr.name){
        return 1
    }else{
        return -1
    }
}

function cmpHeight(prev, curr){
    return curr.height - prev.height
}

users.sort(cmpName)

console.log("name")
for(elem of users){
    console.log(elem.name, elem.height, elem.weight)
}

console.log()
users.sort(cmpHeight)


console.log("height")
for(elem of users){
    console.log(elem.name, elem.height, elem.weight)
}