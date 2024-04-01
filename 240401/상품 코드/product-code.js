const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

class Product{
    constructor(name, code){
        this.name = name;
        this.code = code;
    }
}

const codetree = new Product()
codetree.name = "codetree"
codetree.code = 50

const leebros = new Product(...input)

console.log(`product ${codetree.code} is ${codetree.name}`)
console.log(`product ${leebros.code} is ${leebros.name}`)