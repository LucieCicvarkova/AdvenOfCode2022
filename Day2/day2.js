const fs = require("fs");
const input = fs.readFileSync("./day2-input.txt", "utf8");
const inputArray = input.split("\r\n"); 

/* Rock-scissors-paper

A,B,C - oponnent (A-rock, B-paper, C-scissors)
X,Y,Z - me (X - rock, Y - paper, Z - scissors)
scoring system:
 win +6
 draw + 3
 loose 0
 me choosing Rock +1
 me chosing Paper +2
 me choosing Scissors +3
*/

const getResultOfGame1 = (round) => {
     switch (round) {
         case 'A X': return 4;        
         case 'A Y': return 8;         
         case 'A Z': return 3;        
         case 'B X': return 1;         
         case 'B Y': return 5;         
         case 'B Z': return 9;         
         case 'C X': return 7;         
         case 'C Y': return 2;        
         case 'C Z': return 6;         
     }
 }

const arrayAfterGame1 = inputArray.map((item) => getResultOfGame1(item));
const summedArray1 =  arrayAfterGame1.reduce((acc, val) => acc + val);
console.log(summedArray1);

/*  ---part two---
New scoring system:
X = me choosing shape to loose
Y = me choosing shape to draw
Z = me choosing shape to win
*/

    const getResultOfGame2 = (round) => {        
            switch (round) {
                case 'A X': return 3;               
                case 'A Y': return 4;               
                case 'A Z': return 8;                
                case 'B X': return 1;                
                case 'B Y': return 5;               
                case 'B Z': return 9;                
                case 'C X': return 2;                
                case 'C Y': return 6;                
                case 'C Z': return 7;              
            }  
        }

const arrayAfterGame2 = inputArray.map((round) => getResultOfGame2(round)); 
const summedArray2 =  arrayAfterGame2.reduce((acc, val) => acc + val);
console.log(summedArray2);
