const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const arr = input.split("")
let place = 0

for(let i = 0; i < arr.length; i++){
    if(arr[i] === "e"){
        place = i
        break
    }
}

let result = input.slice(0, place) + input.slice(place + 1)

console.log(result)