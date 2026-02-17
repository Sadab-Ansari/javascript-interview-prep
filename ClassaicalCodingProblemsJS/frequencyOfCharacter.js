// Function to count frequency of each character
function countFrequency(str) {

  // Create an empty object to store character counts
  let freq = {};

  // Loop through each character of the string
  for (let char of str) {

    // Check if character already exists in object
    if (freq[char]) {
      // If yes → increase its count by 1
      freq[char] = freq[char] + 1;
    } else {
      // If no → add character to object with count 1
      freq[char] = 1;
    }
  }

  // Return the final frequency object
  return freq;
}

// Example usage
console.log(countFrequency("banana"));

/*
Expected Output:
{
  b: 1,
  a: 3,
  n: 2
}
*/
