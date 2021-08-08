// 6 kyu
// https://www.codewars.com/kata/60a54750138eac0031eb98e1

const checkVin = (vin) => {
  if (vin.split('').length !== 17) {
    return false;
  };

  const convertMap = createMap();
  const strNumber = convertToNumStr(vin, convertMap);
  const byWeight = sumMulStrNumByWeight(strNumber);
  const isValidVin = checkSumForMod(byWeight, vin);
  return isValidVin;
};


const createMap = () => {
  const convertMap = new Map();
  const alpha = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
  const restrictedAlpha = ['I', 'O', 'Q'];

  let counter = -1;

  for (let char of alpha.split(' ')) {
    counter++;
    if (restrictedAlpha.indexOf(char) !== -1) {
      continue;
    }

    if (char === 'S') {
      counter++;
    }

    convertMap.set(char, counter % 9 + 1);
  }

  return convertMap;
};

const convertToNumStr = (vin, convertMap) => {
  let num = '';

  for (char of vin) {
    let conv = convertMap.get(char);
    num += conv ? convertMap.get(char) : char;
  };

  return num;
};

const sumMulStrNumByWeight = (nums) => {
  const weight = [8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2];
  let totalSum = 0;

  for (let i = 0; i < nums.length; i++) {
    totalSum += parseInt(nums[i]) * weight[i]; 
  };

  return totalSum;
};

const checkSumForMod = (vinSum, vin) => {
  const sumMod = vinSum % 11;

  return sumMod === 10 ? vin[8] === 'X' : vin[8] === `${sumMod}`;
};
