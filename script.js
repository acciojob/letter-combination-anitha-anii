function letterCombinations(digits) {
  if (digits.length === 0) {
    return [];
  }

  const digitToLetters = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  };

  const combinations = [];

  backtrack("", digits);

  return combinations;

  function backtrack(currentCombination, remainingDigits) {
    if (remainingDigits.length === 0) {
      combinations.push(currentCombination);
      return;
    }

    const currentDigit = remainingDigits[0];
    const letters = digitToLetters[currentDigit];

    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      backtrack(currentCombination + letter, remainingDigits.slice(1));
    }
  }
}

const input = "23";
const combinations = letterCombinations(input);
console.log(combinations);


 