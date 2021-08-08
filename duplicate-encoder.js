// 6 kyu
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

function duplicateEncode(word) {
  word = word.toLowerCase();
  const charsMap = createCharsMap(word);
  
  let replacedWord = '';
  for (char of word) {
    replacedWord += charsMap.get(char) === 1 ? '(' : ')';
  };

  return replacedWord;
};

const createCharsMap = (word) => {
  const charsMap = new Map();
  let tempChar = '';

  for (let char of word) {
    tempChar = charsMap.get(char);

    if (!tempChar) {
      charsMap.set(char, 1);
    } else {
      charsMap.set(char, ++tempChar);
    };
  };

  return charsMap;
};
