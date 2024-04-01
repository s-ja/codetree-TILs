const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input.shift())

class Weather{
    constructor(date, day, weather){
        this.date = date;
        this.day = day;
        this.weather = weather;
    }
}

const weathers = []

for(elem of input){
    weathers.push(new Weather(...elem.split(" ")))
}

const rain = []

for(elem of weathers){
    if(elem.weather === "Rain"){
        rain.push(elem)
    }
}

let fastRain = null

// console.log(weathers)
// console.log(rain)
for(elem of rain){
    if(!fastRain){
        fastRain = elem
    }else if(elem.date < fastRain.date){
        fastRain = elem
    }else{
        continue
    }
}

// console.log(fastRain)
console.log(fastRain.date, fastRain.day, fastRain.weather)