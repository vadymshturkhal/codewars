// 5 kyu
// https://www.codewars.com/kata/583d171f28a0c04b7c00009c

function maxSum(arr,range){
  const memoize = new Map();
  let maxRangeSum = -Infinity;
  let currentRangeSum = 0;

  let totalSumToIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    totalSumToIndex += arr[i];
    memoize.set(i, totalSumToIndex);
  }

  for (let pair of range) {
    currentRangeSum = pair[0] > 0 ? memoize.get(pair[1]) - memoize.get(pair[0] - 1) : memoize.get(pair[1]);
    maxRangeSum = currentRangeSum > maxRangeSum ? currentRangeSum : maxRangeSum;
  }
  
  return maxRangeSum;
};
