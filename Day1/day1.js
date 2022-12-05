const fs = require("fs");
const input = fs.readFileSync("./day1-input.txt", "utf8");
const inputArray = input.split("\r\n");

let itemsSum = 0;
let inputsSumArray = [];

for (let i = 0; i < inputArray.length; i++) {  
    if(inputArray[i] !== "") {
        itemsSum = itemsSum + parseInt(inputArray[i]);        
    }
    else if (inputArray[i] == "") {
     inputsSumArray.push(itemsSum); 
     itemsSum = 0;     
    }       
}
const max = Math.max(...inputsSumArray);
console.log("1st highest value " + max);

/*part two*/

const arraySorted = inputsSumArray.sort((a,b) => b - a);
const sumOfThreeHighest = arraySorted[0] + arraySorted[1] + arraySorted[2];
console.log(sumOfThreeHighest);
