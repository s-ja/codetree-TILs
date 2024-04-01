const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

class User{
    constructor(id = "codetree", level = 10){
        this.id = id;
        this.level = level;
    }
}

const user1 = new User()
const user2 = new User(...input)

console.log(`user ${user1.id} lv ${user1.level}`)
console.log(`user ${user2.id} lv ${user2.level}`)