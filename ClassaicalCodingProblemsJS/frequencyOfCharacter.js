function countFrequency(str) {
  let freq = {};
  for (let char of str)
    if (freq[char]) {
      freq[char] = freq[char] + 1;
    } else {
      freq[char] = 1;
    }
  return freq;
}
console.log(countFrequency("banana"));
