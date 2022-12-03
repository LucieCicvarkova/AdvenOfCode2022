const fs = require("fs");
const input = fs.readFileSync("./day3-input.txt", "utf8");
const inputArray = input.split("\r\n"); 

/* ---part one--- */
const findSharedItem = (row) => {
    let sharedItem = "";
    let firstCompartment = row.slice(0,row.length/2);
    let secondCompartment = row.slice(row.length/2);    
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

let sumOfSharedItems = 0;

inputArray.forEach(function(row) {
    let sharedItemAsLetter = findSharedItem(row);    
    let sharedItemAsNumber = transformIntoNumber(sharedItemAsLetter, alphabet);    
    sumOfSharedItems = sumOfSharedItems + sharedItemAsNumber;     
});    

console.log("Sum of shared items: " +sumOfSharedItems);

/*---part two---*/

let groupsArray = [];
const getGroups = (array) => {
    for(let r = 0; r < array.length; r += 3) {
        const group = array.slice(r, r + 3);
        groupsArray.push(group);
    }
    return groupsArray;
}
getGroups(inputArray);
console.log(groupsArray);

let arrayOfBadges = [];
const getArrayOfBadges = (group) => {
    for(let p = 0; p < group[0].length; p++) {
        let possibleBadge = group[0][p];        
        (group[1].includes(possibleBadge) && group[2].includes(possibleBadge)) ? arrayOfBadges.push(possibleBadge) : false;
    }
    return arrayOfBadges;
}

groupsArray.forEach(function(group) {
    getArrayOfBadges(group);
});
console.log(arrayOfBadges);

const arrayOfNumbers = arrayOfBadges.map(badge => {
    return transformIntoNumber(badge, alphabet);
})

console.log(arrayOfNumbers);

const badgesSum =  arrayOfNumbers.reduce((acc, val) => acc + val);
console.log(badgesSum);