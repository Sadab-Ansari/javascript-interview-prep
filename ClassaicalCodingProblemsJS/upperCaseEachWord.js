// function capitalizeWords(str) {
//   return str
//     .split(" ") // Split sentence into words
//     .map(
//       (word) =>
//         word.charAt(0).toUpperCase() + // Capitalize first letter
//         word.slice(1), // Add remaining letters
//     )
//     .join(" "); // Join words back into sentence
// }

// console.log(capitalizeWords("hello world from ranchi"));

/////Another Method
function capitalizeWords(str) {
  // Step 1: Split the sentence into words using space
  // "hello world" → ["hello", "world"]
  let words = str.split(" ");

  // This will store the final result string
  let result = "";

  // Step 2: Loop through each word
  for (let i = 0; i < words.length; i++) {
    // Get current word
    let word = words[i];

    // Capitalize first letter:
    // word[0] → first character
    // toUpperCase() → convert it to uppercase
    // word.slice(1) → get remaining letters
    // Then add a space after each word
    result += word[0].toUpperCase() + word.slice(1) + " ";
  }

  // Step 3: Remove extra space at the end using trim()
  return result.trim();
}

console.log(capitalizeWords("hello world from ranchi"));
// Output: Hello World From Ranchi
