function letterCombinations(digits) {

  if (digits.length === 0) {
    return [];
  }

  const digitToLetters = {
    0: '0',
    1: '1',
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  const combinations = [''];

  for (const digit of digits) {
    const letters = digitToLetters[digit];
    const newCombinations = [];
    for (const combination of combinations) {
      for (const letter of letters) {
        newCombinations.push(combination + letter);
      }
    }
    combinations.splice(0, combinations.length, ...newCombinations);
  }

  return combinations;
}

/*Do not change anything below*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", function (line) {
  const digits = line.trim();
  const result = letterCombinations(digits);
  console.log(result.sort());
  rl.close();
});


 