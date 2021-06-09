// The Problem
// Find the first (complete number) duplicate num in array
// Hint: 

/**
 * @param {array} {[2,2,5,4,3,11,3,5]}
 * @return {num} 2
 */

const array = [2,2,5,4,3,11,3,5]


// Cách 1: Sử dụng for-loop để loop từng item check condition => push vào temp array và tìm số nhỏ nhất
// Sử dụng for => complexity: O(n)
const findFirstDuplicate = (array) => {
  let tempDuplicate = []
  for(let i = 0; i < array.length-1; i++) {
    let isExist = array.indexOf(array[i], i+1)
    if(isExist > -1) tempDuplicate.push(isExist)
  }
  
  if(!tempDuplicate.length) return -1

  const min = Math.min.apply(null, tempDuplicate) //https://medium.com/coding-at-dawn/the-fastest-way-to-find-minimum-and-maximum-values-in-an-array-in-javascript-2511115f8621
  return array[min]

}
console.log(findFirstDuplicate(array))

