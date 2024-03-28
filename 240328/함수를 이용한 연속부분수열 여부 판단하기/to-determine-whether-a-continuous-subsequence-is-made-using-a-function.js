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

    let result = []

    for(let i = 0; i < n1 - n2 + 1; i++){
        let tmp = [];
        for(let j = 0; j < n2; j++){
            if(A[i + j] !== B[j]){
                // result = false
                break
            }else{
                tmp.push(A[i + j])
            }
        }

        result.push(tmp)
    }
    let cnt = 0
    // console.log(result)

    for(elem of result){
        for(let i = 0; i < elem.length; i++){
            if(elem[i] === B[i]){
                cnt++
            }else{
                break
            }
        }
        if(cnt === B.length){
            break
        }
    }

    // return(cnt)
    // return result
    if(cnt > B.length){
        return "Yes"
    }else{
        return "No"
    }
}

// 95 21
// 76 80 21 82 62 13 3 8 53 67 2 90 74 6 15 64 40 67 30 72 67 41 72 61 6 2 70 10 13 29 98 22 12 13 89 93 48 72 11 40 96 33 16 9 23 52 26 96 90 88 70 87 25 20 4 99 8 53 20 14 20 58 46 27 69 82 43 79 70 48 66 64 60 29 48 90 50 21 78 77 95 19 15 89 14 98 55 96 50 58 59 83 14 93 72 
// 69 49 21 66 23 37 90 15 28 10 35 98 82 35 61 83 24 85 17 91 71