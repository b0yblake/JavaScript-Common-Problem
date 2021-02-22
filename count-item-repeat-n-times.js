/**
 * @param {array} array
 * @return {object}
 */

// KEY POINT:
// Cho array số, string, object, đếm số lần xuất hiện của từng item

// Normal way
const countByRegular = arr =>
  arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

console.log(countByRegular([6, 4, 6])); // {4: 1, 6: 2}
console.log(countByRegular(['one', 'two', 'three', 'three'])); // {one: 1, two: 1, three: 2}


// Express way
const countBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

console.log(countBy([6.1, 4.2, 6.3], Math.floor)); // {4: 1, 6: 2}
console.log(countBy(['one', 'two', 'three'], 'length')); // {3: 2, 5: 1}
console.log(countBy([{ count: 5 }, { count: 10 }, { count: 5 }], x => x.count)) // {5: 2, 10: 1}
