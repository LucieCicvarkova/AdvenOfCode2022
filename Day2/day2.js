const fs = require("fs");
const input = fs.readFileSync("./day2-input.txt", "utf8");
const inputArray = input.split("\r\n"); 


// for(let i = 0; i < inputArray.length; i++) {
//     switch (inputArray[i]) {
//         case 'A X': inputArray[i] = 4;
//         break;
//         case 'A Y': inputArray[i] = 8;
//         break;
//         case 'A Z': inputArray[i] = 3;
//         break;
//         case 'B X': inputArray[i] = 1;
//         break;
//         case 'B Y': inputArray[i] = 5;
//         break;
//         case 'B Z': inputArray[i] = 9;
//         break;
//         case 'C X': inputArray[i] = 7;
//         break;
//         case 'C Y': inputArray[i] = 2;
//         break;
//         case 'C Z': inputArray[i] = 6;
//         break;
//         default: console.log("Not expected input");
//         break;
//     }
// }

//part two

for(let i = 0; i < inputArray.length; i++) {
    switch (inputArray[i]) {
        case 'A X': inputArray[i] = 3;
        break;
        case 'A Y': inputArray[i] = 4;
        break;
        case 'A Z': inputArray[i] = 8;
        break;
        case 'B X': inputArray[i] = 1;
        break;
        case 'B Y': inputArray[i] = 5;
        break;
        case 'B Z': inputArray[i] = 9;
        break;
        case 'C X': inputArray[i] = 2;
        break;
        case 'C Y': inputArray[i] = 6;
        break;
        case 'C Z': inputArray[i] = 7;
        break;
        default: console.log("Not expected input");
        break;
    }
}

const summedArray =  inputArray.reduce((acc, val) => acc + val, 0);
console.log(summedArray);