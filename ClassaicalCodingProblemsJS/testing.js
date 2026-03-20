// ------------------Easiest way
// function revrseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(revrseString("Ranchi"));

//
// let str = "Mumbai";
// function reverseString() {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString());
         //---------------------Practice
let str = "hello";
let splitString = str.split("");
let reverseLetters = splitString.reverse();
let reversedWord = reverseLetters.join("");
console.log(reversedWord);
......