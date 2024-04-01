const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

class Agent{
    constructor(codename = "", score = 0){
        this.codename = codename;
        this.score = score;
    }
}

const agents = []

for(elem of input){
    const [codename, score] = elem.split(" ")
    agents.push(new Agent(codename, Number(score)))
}

let low = agents[0]

for(elem of agents){
    if(elem.score < low.score){
        low = elem
    }else{
        continue
    }
}

console.log(low.codename, low.score)