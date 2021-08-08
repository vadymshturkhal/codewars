// 6 kyu
// https://www.codewars.com/kata/514b92a657cdc65150000006

function solution(number){
  const baseNumbers = [3, 5, -3 * 5];
  const naturalNumbers = [];

  for (num of baseNumbers) {
    let counter = 1;
    
    while (Math.abs(counter * num) < number) {
      naturalNumbers.push(counter * num);
      counter++;
    }
  };
  
  return naturalNumbers.length > 0 ? naturalNumbers.reduce((acc, val) => acc + val) : 0;
};
