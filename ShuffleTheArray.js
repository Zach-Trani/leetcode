/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

const shuffle = function (nums, n) {
  let shuffledArray = [];

  const firstArray = nums.slice(0, n);
  const secondaryArray = nums.slice(n);

  for (let i = 0; i < firstArray.length; i++) {
    shuffledArray.push(firstArray[i]);
    shuffledArray.push(secondaryArray[i]);
  }
  return shuffledArray;
};

console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4));
