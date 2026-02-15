//
// function removeDuplicates(str) {
//   // new Set(str)
//   // Converts string into a Set.
//   // Set automatically removes duplicate characters.
//   // Example: "banana" → Set { 'b', 'a', 'n' }

//   // [...new Set(str)]
//   // Spread operator (...) converts the Set back into an array.
//   // Example: ['b', 'a', 'n']

//   // .join("")
//   // Converts the array back into a string.
//   // Result: "ban"

//   return [...new Set(str)].join("");
// }

// console.log(removeDuplicates("banana")); // "ban"

//
function removeDuplicates(str) {
  // This variable will store the final string
  // without duplicate characters
  let result = "";

  // Loop through each character of the string
  for (let char of str) {
    // Check if the character is NOT already present in result
    // result.includes(char) → true if already exists
    // ! → means "not"
    if (!result.includes(char)) {
      // If character is not present,
      // add it to the result string
      result += char;
    }
  }

  // Return the final string without duplicates
  return result;
}

console.log(removeDuplicates("banana")); // "ban"
