const fs = require("fs");
const input = fs.readFileSync("./day3-input.txt", "utf8");
const inputArray = input.split("\r\n"); 

let sumOfSharedItems = 0;

const findSharedItem = (row) => {
    let sharedItem = "";
    let firstCompartment = row.slice(0,row.length/2+1);
    let secondCompartment = row.slice(row.length/2+1);    
    for(let i = 0; i < firstCompartment.length; i++ ) {
            for(let j = 0; j < secondCompartment.length; j++) {
                if(firstCompartment[i] === secondCompartment[j]) {
                    sharedItem = firstCompartment[i];                  
                }
            }      
    }
    return sharedItem;
}

const alphabet = "0abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const transformIntoNumber = (letter, alphabet) => {
    return alphabet.indexOf(letter);
    }

inputArray.forEach(function(row) {
    let sharedItemAsLetter = findSharedItem(row);
    console.log("Shared letter is: " + sharedItemAsLetter);
    let sharedItemAsNumber = transformIntoNumber(sharedItemAsLetter, alphabet);
    console.log("Shared number is: " + sharedItemAsNumber)
    sumOfSharedItems = sumOfSharedItems + sharedItemAsNumber; 
    console.log("Sum is: " + sumOfSharedItems);
});    

console.log(sumOfSharedItems);