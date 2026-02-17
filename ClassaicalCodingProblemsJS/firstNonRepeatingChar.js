function firstNonRepeating(str) {
  // Create an empty object to store frequency of each character
  let freq = {};

  // -------------------------------
  // Step 1: Count frequency
  // -------------------------------

  // Loop through each character of the string
  for (let char of str) {
    // If character already exists in object,
    // increase its count by 1
    // Otherwise, set its count to 1

    // (freq[char] || 0) means:
    // If freq[char] exists → use that value
    // If not → use 0
    freq[char] = (freq[char] || 0) + 1;
  }

  /*
    Example for "swiss":

    freq becomes:
    {
      s: 3,
      w: 1,
      i: 1
    }
  */

  // -------------------------------
  // Step 2: Find first non-repeating
  // -------------------------------

  // Loop again in original order
  // (important because we want FIRST non-repeating)
  for (let char of str) {
    // Check if frequency is exactly 1
    if (freq[char] === 1) {
      // If yes → return that character immediately
      return char;
    }
  }

  // If no non-repeating character found
  return null;
}

console.log(firstNonRepeating("swiss")); // "w"
console.log(firstNonRepeating("aabbcc")); // null




// ----------------------

// function firstNonRepeating(str) {
//   let freq = {};
//   for (let char of str) {
//     freq[char] = (freq[char] || 0) + 1;
//   }
//   for (let char of str) {
//     if (freq[char] === 1) {
//       return char;
//     }
//   }

//   return null;
// }
// console.log(firstNonRepeating("swiss"));
