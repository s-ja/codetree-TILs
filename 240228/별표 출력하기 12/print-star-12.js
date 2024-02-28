const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

for(let i = 0; i < n; i++){
    let str = ""
    if(i === 0){
        for(let j = 0; j < n; j++){
            str += "* "
        }
    }else{
        for(let j = 0; j < n; j++){
            if(j % 2 !== 0){
                // str += "* "
                if(i <= j){
                    str += "* "
                }else{
                    str += "  "
                }
            }else{
                str += "  "
            }
        }
    }
    console.log(str)
}

// for(let i = 0; i < n; i++){
//     let str = ""
//     for(let j = 0; j < n; j++){
//         if(i === 0){
//             str += "* "
//         }else if(j % 2 !== 0 && i % 2 !== 0){
//             str += "* "
//         }else{
//             str += "  "
//         }
//     }
//     console.log(str)
// }