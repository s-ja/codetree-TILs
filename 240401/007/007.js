const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

class Secret{
    constructor(code, point, time){
        this.code = code;
        this.point = point;
        this.time = time;
    }
}

const secret = new Secret(...input)
console.log("secret code : " + secret.code)
console.log("meeting point : " + secret.point)
console.log("time : " + secret.time)