// 7 kyu
// https://www.codewars.com/kata/52fba66badcd10859f00097e

function disemvowel(str) {
  const vowels = new Map();
  let untrolledStr = '';

  for (vowel of ['a', 'e', 'i', 'o', 'u',]) {
    vowels.set(vowel, vowel);
  };

  for (let char of str) {
    if (vowels.get(char.toLowerCase())) {
      continue;
    };
    untrolledStr += char;
  };

  return untrolledStr;
};
