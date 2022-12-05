const fs = require("fs");
const input = fs.readFileSync("./day4-input.txt", "utf8");
const inputArray = input.split("\r\n");

const nonDigits = new RegExp(/\D/);
const arrayOfNumbers = inputArray.map((item) => {
  return item.split(nonDigits);
});

let countOfCompleteOverlaps = 0;
const countCompleteOverlaps = (item) => {
  if (
    (parseInt(item[0]) > parseInt(item[2]) &&
      parseInt(item[1]) > parseInt(item[3])) ||
    (parseInt(item[0]) < parseInt(item[2]) &&
      parseInt(item[1]) < parseInt(item[3]))
  ) {
    /* do nothing */
  } else {
    countOfCompleteOverlaps++;
  }
};

let countOfPartialOverlaps = 0;
const countPartialOverlaps = (item) => {
  if (
    parseInt(item[1]) >= parseInt(item[2]) &&
    parseInt(item[0]) <= parseInt(item[3])
  ) {
    countOfPartialOverlaps++;    
  } 
};


arrayOfNumbers.forEach((item) => {
    countCompleteOverlaps(item);   
});
console.log(countOfCompleteOverlaps);

/* --- part two --- */

arrayOfNumbers.forEach((item) => {
    countPartialOverlaps(item);   
});
console.log(countOfPartialOverlaps);

/* ---Test--- 

const testCompleteOverlap = [
  ["5", "5", "5", "5"],
  ["5", "10", "5", "10"],
  ["5", "10", "5", "5"],
  ["5", "5", "5", "10"],
  ["1", "10", "2", "9"],
  ["2", "9", "1", "10"],
  ["4", "9", "5", "10"],
  ["5", "10", "4", "9"],
];

const testPartialOverlap = [
  ["1", "5", "5", "10"],
  ["5", "10", "1", "5"],
  ["1", "5", "4", "6"],
  ["4", "6", "1", "5"],
  ["1", "5", "1", "6"],
  ["1", "6", "1", "5"],
  ["1", "5", "6", "10"],
  ["6", "10", "1", "5"],
];

testCompleteOverlap.forEach((item) => {
    countCompleteOverlaps(item);   
});
console.log(countOfCompleteOverlaps);

testPartialOverlap.forEach((item) => {
    countPartialOverlaps(item);   
});
console.log(countOfPartialOverlaps); */