const fs = require("fs");
const input = fs.readFileSync("./day4-input.txt", "utf8");
const inputArray = input.split("\r\n"); 

const nonDigits = new RegExp(/\D/);
const arrayOfNumbers = inputArray.map((item) => {
    return item.split(nonDigits);
})

/*console.log(arrayOfNumbers);*/

const testingArray = [
[ '5', '5', '5', '5' ],
[ '5', '10', '5', '10' ],
[ '5', '10', '5', '5' ],
[ '5', '5', '5', '10' ],
[ '1', '10', '2', '9' ],
[ '2', '9', '1', '10' ],
[ '4', '9', '5', '10' ],
[ '5', '10', '4', '9' ],
]

let countOfOverlaps = 0;
const countOverlaps = (item) => {    
if (parseInt(item[0]) > parseInt(item[2]) && parseInt(item[1]) > parseInt(item[3]) || parseInt(item[0]) < parseInt(item[2]) && parseInt(item[1]) < parseInt(item[3])  ) {
    console.log("No overlap");
}
else {
    countOfOverlaps++;
    console.log("Count of overlaps: " + countOfOverlaps);
}
}

arrayOfNumbers.map((item) => {
        return countOverlaps(item);  
    } )     

console.log(countOfOverlaps);
