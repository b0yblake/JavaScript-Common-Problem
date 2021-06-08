// The Problem
// Given an array of numbers and a target number, find the sum of two numbers from the array that is equal to the target number.
// May not sum the same index twice. Return these numbers.

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


// Cách 2: Sử dụng 1 lần for-loop -> vì chúng ta đã biết target (target = num của loop + số cần tìm),
// nên chỉ cần tìm số còn lại trong array gốc => nếu có thì return luôn array
// Độ khó là 0(n)

const twosum2 = (nums, target) => {

  //FIRST STEP: create an empty Object 
  let numObject = {}

  //SECOND STEP: use a for-loop to iterate through the array
  for(let eachNum in nums) {

    //we'll check for otherNum in the object and if it's there, we got it and can push in our result array.  
    let otherNum = target - nums[eachNum]

    if(otherNum in numObject){
      let resultArr = []
      resultArr.push(otherNum, nums[eachNum])     
      return resultArr;
    }

    //NB! adding key/value has to go after the if-statement to avoid adding the same index twice. We add the value or a new pair on each iteration.
    numObject[nums[eachNum]] = eachNum
  }

  return null;
}


console.log(twosum2(nums, 25)) //[11, 14]
