function isAnagram(str1, str2) {
  // Step 1: If lengths are different,
  // they cannot be anagrams
  if (str1.length !== str2.length) {
    return false;
  }

  // Step 2: Convert first string into array of characters
  // Sort the characters alphabetically
  // Join back into a string
  let sorted1 = str1.split("").sort().join("");

  // Do the same for second string
  let sorted2 = str2.split("").sort().join("");

  // Step 3: Compare both sorted strings
  // If equal → anagram
  // If not equal → not anagram
  return sorted1 === sorted2;
}

// Example usage
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
console.log(isAnagram("hello", "worldqqqqqqq"));