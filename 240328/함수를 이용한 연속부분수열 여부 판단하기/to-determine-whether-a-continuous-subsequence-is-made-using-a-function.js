const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

console.log(result(input))

function result(input){
    const [n1, n2] = input[0].split(" ").map(Number)

    const A = input[1].split(" ").map(Number)
    const B = input[2].split(" ").map(Number)
    if(n2 > n1){
        return "No"
    }

    let result = false

    for(let i = 0; i < n1 - n2 + 1; i++){
        let tmp = false;
        for(let j = 0; j < n2; j++){
            if(A[i + j] !== B[j]){
                result = false
                break
            }
            result = true;
            tmp = true;
        }

        if(tmp){
            break
        }
    }

    if(result){
        return "Yes"
    }else{
        return "No"
    }
}