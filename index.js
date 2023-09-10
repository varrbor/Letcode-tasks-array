// https://allnovel.net/it-ends-with-us/page-4.html
// remove dublicatats

// const arr = [1, 1, 2, 2, 2, 3, 3, 4];
// var removeDuplicates = function (nums) {
//   var unique = [];
//   for (let i = 0; i < nums.length; i++) {
//     console.log(i, unique.indexOf(nums[i]) )
//     if (unique.indexOf(nums[i]) === -1) {
//       unique.push(nums[i]);
//     }
//   }
//   return unique;
// };
// console.log(removeDuplicates(arr));

// best time to buy and sell stock

// const maxProfit = function (prices) {
//   let min = Infinity;
//   let max = -Infinity;
//   let profit = 0;
//   for (const price of prices) {
//     if (price < max) {
//       profit += max - min;
//       min = price;
//       max = price;
//     }
//     min = Math.min(min, price);
//     max = Math.max(max, price);
//   }
//   if (max > 0) {
//     profit += max - min;
//   }
//   return profit;
// };
// console.log(maxProfit([10, 18, 4, 5, 9, 6, 16, 12]));

// rotate array

// const arr = [1,2,3,4,5,6,7]

// var rotate = function(nums, numberOfShifts)  {
//   let tmp = 0;
//   const leng = nums.length;
//   // numberOfShifts = numberOfShifts % leng;
//   // console.log(numberOfShifts)
//   for (let i = 0; i < numberOfShifts; i++) {
//      tmp = nums.pop();
//      console.log('tmp', tmp)
//      nums.unshift(tmp);
//   }
//  return nums;
// };

// console.log(rotate(arr, 3))

// Contains Duplicate
// const a =[1,2,3,4, 4];

// var containsDuplicate = function(nums) {
//   var valuesSoFar = [];
//   for (var i = 0; i < nums.length; i++) {
//       var value = nums[i];

//       if (valuesSoFar.includes(value)) {
//           return true;
//       }
//       valuesSoFar[i] = value;
//       console.log(value);
//      console.log(valuesSoFar);

//   }
//   return false;
// }

// console.log(containsDuplicate(a));

// Single Number
// const arr = [1,2,1,2]
// var singleNumber = function(nums) {
//   const sorted = nums.sort()
//   console.log('sorted', sorted)
//     for (let i = 0; i < sorted.length; i++) {
//       if (sorted[i-1] !== sorted[i] && sorted[i+1] !== sorted[i]) {
//         return sorted[i]
//       }
//     }
//   }

// console.log(singleNumber(arr) )

// Intersection of Two Arrays

// const a = [1,2,3]
// const b = [2,3,4,5]
// const intersection = (array1, array2) => array1.filter(value => array2.includes(value));

// console.log(intersection(a, b))

// Plus One

// let plusOne = function(digits) {
//   for(let i=digits.length-1;i>=0;i--){
//       digits[i]++;
//       if(digits[i]>9){
//           digits[i]=0;
//       }
//       else{
//           return digits;
//       }
//   }
//   digits.unshift(1);
//   return digits;
// };

// console.log(plusOne([9]))

// Move Zeroes

const nums = [0, 0, 1, 0, 3, 12];

var moveZeroes = function (nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    nums[i] === 0 && nums.splice(i, 1) && nums.push(0);
  }
  return nums;
};

console.log(moveZeroes(nums));
