const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

console.log(solution(input));

function solution(input){
    const [year, month, date] = input
    if(isRightDate(year, month, date)){
        return season(month)
    }else{
        return -1
    }
}

function isRightDate(year, month, date){
    const thirtyOne = [1,3,5,7,8,10,12]
    
    if(isLeapYear(year)){
        if(month === 2){
            if(date > 29){
                return false
            }else{
                return true
            }
        } else if(thirtyOne.includes(month)){
            if(date > 31){
                return false
            }else{
                return true
            }
        }else{
            if(date > 30){
                return false
            }else{
                return true
            }
        }
    }else{
        if(month === 2){
            if(date > 28){
                return false
            }else{
                return true
            }
        } else if(thirtyOne.includes(month)){
            if(date > 31){
                return false
            }else{
                return true
            }
        }else{
            if(date > 30){
                return false
            }else{
                return true
            }
        }
    }
}

function isLeapYear(year){
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                return true
            }
            return false
        }
        return true
    }
    return false
}

function season(month){
    if(2 < month && month < 6){
        return "Spring"
    }else if(5 < month && month < 9){
        return "Summer"
    }else if(8 < month && month < 12){
        return "Fall"
    }else {
        return "Winter"
    }
}