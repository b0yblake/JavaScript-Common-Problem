//Check if item (number) in array has repeat, remove it and leave it only once.

/**
 * @param {array} array
 * @return {array}
 */

const arrayDuplicated = [1, 2, 2, 3, 1, 2, 4, 5, 4, 2, 6];

// Cách 1: new Set (best way for model js)
const removedDuplicate = array => [...new Set(array)];
console.log(removedDuplicate(arrayDuplicated)); //[1, 2, 3, 4, 5, 6]

// Cách 2: Sử dụng map / forEach / for
const removedDuplicate2 = (array) => {
  let tmpArray = [];
  array.map(item => {
    if(!tmpArray.includes(item)) tmpArray.push(item);
  })
  return tmpArray;
}
console.log(removedDuplicate2(arrayDuplicated));

// Cách 3: Sử dụng filter
const removedDuplicate3 = (array) => {
  return array.filter((item, index, self) => {
    return self.indexOf(item) === index;
  })
}
console.log(removedDuplicate3(arrayDuplicated));

// Cách 4: Sử dụng reduce -> init []
const removedDuplicate4 = array => {
  return array.reduce((acc, cur) => {
    if (!acc.includes(cur)) acc.push(cur);
    return acc;
  },[]);
}
console.log(removedDuplicate4(arrayDuplicated));