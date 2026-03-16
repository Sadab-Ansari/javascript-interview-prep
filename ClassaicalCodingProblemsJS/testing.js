function isBalancedParentheses(str) {
  // Stack to keep track of opening parentheses '('
  const stack = [];

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // If the character is an opening parenthesis, push it onto the stack
    if (char === "(") {
      stack.push(char); // Remember that we need a matching ')'
    }
    // If the character is a closing parenthesis
    else if (char === ")") {
      // If stack is empty, there is no matching '(' for this ')'
      if (stack.length === 0) {
        return false; // Unbalanced parentheses
      }
      // Otherwise, pop the last '(' from the stack (they match)
      stack.pop();
    }
    // If the character is anything else, ignore it
  }

  // After processing all characters:
  // - If stack is empty → all '(' had matching ')' → balanced
  // - If stack is not empty → some '(' were never closed → unbalanced
  return stack.length === 0;
}

// Test cases
console.log(isBalancedParentheses("(a + b)")); // true  → Balanced
console.log(isBalancedParentheses("((x + y) * z)")); // true → Balanced
console.log(isBalancedParentheses("(a + b))")); // false → Extra closing ')'
console.log(isBalancedParentheses("((a + b)")); // false → Missing closing ')'
