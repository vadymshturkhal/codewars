// 5 kyu
// https://www.codewars.com/kata/59be8c08bf10a49a240000b1

function changeCase(identifier, targetCase) {
  const cases = new Map();
  cases.set('snake', word => `_${word.toLowerCase()}`);
  cases.set('kebab', word => `-${word.toLowerCase()}`);
  cases.set('camel', word => `${word[0].toUpperCase()}${word.slice(1)}`);

  if (!identifier && cases.has(targetCase)) {
    return '';
  };

  if (!cases.has(targetCase)) {
    return;
  };

  const validChars = createValidChars();

  if (!checkFirstChar(identifier[0], validChars)) {
    return;
  };

  const sepHyphen = identifier.split('-');
  const sepUnderScore = identifier.split('_');

  if (sepHyphen.length > 1 && sepUnderScore.length > 1) {
    return;
  }

  if (sepHyphen.length > 1) {
    return formAllowId(sepHyphen, targetCase, cases);
  };

  if (sepUnderScore.length > 1) {
    return formAllowId(sepUnderScore, targetCase, cases);
  };

  let newId = ''
  for (let char of identifier) {
    if (char === char.toUpperCase()) {
      char = cases.get(targetCase)(char);
    };
    newId += char;
  };

  return newId;
};

const checkFirstChar = (char, allows) => {
  if (char === '-') {
    return false;
  };

  if (!allows.has(char) && char !== '$') {
    return false;
  };

  return true;
};

const formAllowId = (words, targetCase, cases) => {
  if (words[0] !== words[0].toLowerCase()) {
    return;
  };

  let cased = '';

  cased += words[0];

  for (let i = 1; i < words.length; i++) {
    const word = words[i];

    if (word !== word.toLowerCase()) {
      return;
    };
    
    cased += cases.get(targetCase)(word);
  };

  return cased;
};

const createValidChars = () => {
  const chars = '-_abcdefghijklmnopqrstuvwxyz';
  const allowChars = new Map();

  for (let char of chars) {
    allowChars.set(char);
  };

  return allowChars;
};
