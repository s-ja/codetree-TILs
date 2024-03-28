const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

function print(input){
    const left = Number(input[0])
    const right = Number(input[2])
    const operator = input[1]
    if(operator === "+"){
        console.log(plus(left, right))
    }else if(operator === "-"){
        console.log(minus(left, right))
    }else if(operator === "/"){
        console.log(divide(left, right))
    }else if(operator === "%"){
        console.log(remain(left, right))
    }else if(operator === "*"){
        console.log(multiple(left, right))
    }
    else{
        console.log("False")
    }
}

function plus(left, right){
    return `${left} + ${right} = ${left + right}`
}

function minus(left, right){
    return `${left} - ${right} = ${left - right}`
}

function divide(left, right){
    return `${left} / ${right} = ${parseInt(left / right)}`
}

function remain(left, right){
    return `${left} % ${right} = ${left % right}`
}
function multiple(left, right){
    return `${left} * ${right} = ${left * right}`
}

print(input)