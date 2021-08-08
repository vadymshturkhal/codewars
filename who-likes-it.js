// 6 kyu
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362

function likes(names) {
  const possibleDecisionsIndexes = 4;
  const decisions = createDecisionsMap();

  let namesToShow = [];

  const isTooManyNames = names.length >= possibleDecisionsIndexes;

  const [iterations, decision] = decisions.get(isTooManyNames ? possibleDecisionsIndexes : names.length);

  for (let i = 0; i < iterations; i++) {
    namesToShow.push(names[i]);
  };

  if (isTooManyNames) {
    namesToShow.push(names.length - 2);
  };

  return decision(namesToShow);
}

function createDecisionsMap() {
  const decisions = new Map();
  decisions.set(0, [0, () => 'no one likes this']);
  decisions.set(1, [1, (names) => `${names[0]} likes this`]);
  decisions.set(2, [2, (names) => `${names[0]} and ${names[1]} like this`]);
  decisions.set(3, [3, (names) => `${names[0]}, ${names[1]} and ${names[2]} like this`]);
  decisions.set(4, [2, (names) => `${names[0]}, ${names[1]} and ${names[2]} others like this`]);
  return decisions;
};
