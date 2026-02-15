// function isPalindrome(str) {
//   return str === str.split("").reverse("").join("");
// }
// console.log(isPalindrome("madam")); //true
// console.log(isPalindrome("hello")); //false

// Taking Input from the user
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// function isPalindrome(str) {
//   return str === str.split("").reverse().join("");
// }

// rl.question("Enter a string: ", function (str) {
//   console.log(isPalindrome(str));
//   rl.close();
// });

//both for number and the string
// function isPalindrome(str) {
//   str = str.toString();
//   return str === str.split("").reverse().join("");
// }

// console.log(isPalindrome("madam")); // true
// console.log(isPalindrome(121)); // true

// using if-else
let str = "madam";
let letters = str.split("");
let reversedLetters = letters.reverse();
let reverseString = reversedLetters.join("");

if (str == reverseString) {
  console.log("The String is a Palindrome");
} else {
  console.log("The String is not a Palindrome");
}
