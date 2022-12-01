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

const indexOfMax = inputsSumArray.indexOf(max);
inputsSumArray.splice(indexOfMax, 1);

const max2 = Math.max(...inputsSumArray);
console.log("2nd highest value " + max2);

const indexOfMax2 = inputsSumArray.indexOf(max2);
inputsSumArray.splice(indexOfMax2, 1);

const max3 = Math.max(...inputsSumArray);
console.log("3rd highest value " + max3);

console.log(max+max2+max3);