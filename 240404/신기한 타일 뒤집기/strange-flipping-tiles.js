const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const maxN = 1000;
const maxX = 100;
const maxK = maxN * maxX;
const n = Number(input.shift());

const arr = Array(maxK * 2 + 1).fill(0)
let curr = maxK;
let w = 0, b = 0;

for(elem of input){
    const [cnt, direction] = elem.split(' ');
    let count = Number(cnt);

    if(direction === 'L'){
        while(count > 0){
            arr[curr] = 1;
            count--;

            if(count){
                curr--;
            }
        }
    }else{
        while(count > 0){
            arr[curr] = 2;
            count--;

            if(count){
                curr++;
            }
        }
    }
}

for(const elem of arr){
    if(elem === 1){
        w++;
    }else if(elem === 2){
        b++;
    }
}

console.log(w, b);