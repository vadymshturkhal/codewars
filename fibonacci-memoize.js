// 5 kyu
// https://www.codewars.com/kata/529adbf7533b761c560004e5

function fibonacci(n, memoize) {
  if (n <= 1)
    return n;

  if (!memoize) {
    memoize = new Map();
  };

  if (memoize.has(n)) {
    return memoize.get(n);
  };

  const first = fibonacci(n - 1, memoize);
  const second = fibonacci(n - 2, memoize);

  memoize.set(n - 1, first);
  memoize.set(n - 2, second);

  return first + second;
};