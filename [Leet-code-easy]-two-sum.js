// The Problem
// Given an array of numbers and a target number, find the sum of two numbers from the array that is equal to the target number. May not sum the same index twice. Return these numbers.

/**
 * @param {array, target} {[1, 3, 10, 11, 14], 25}
 * @return {array} [11, 14]
 */

const nums = [1, 3, 10, 11, 14];

// Cách 1: Sử dụng for-loop để loop từng item check condition
// Sử dụng for-in-for => complexity: O(n^2)

const twosum = (nums, target) => {
  let result = [];  

  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[i] + nums[j] === target) {
        result.push(nums[i], nums[j])
      }
    }
  }
  return result;
}

console.log(twosum(nums, 25)) //[11, 14]


// Cách 2: Sử dụng 
// 

const twosum2 = (nums, target) => {
  
}


console.log(twosum2(nums, 25)) //[11, 14]


