/**
 * @param {array} array
 * @return {Boolean}
 */

const chunkArray = [ 'a', 'b', '', 'd'];
const chunkObject = {
  player: 'Demo1',
  hits: 2,
  runs: 1,
  errors: 0,
};

// Cách 1: sử dụng các loại for loop thông dụng: "for", "for of", "for in", "forEach"
const isExist = ((arr, itemCheck) => {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === itemCheck) return true;
    return false;
  }
})
console.log(isExist(chunkArray, 'c')); // false

const isExist2 = ((object, itemCheck) => {
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];
      if(element === itemCheck) return true
    }
  }
  return false;
})
console.log(isExist2(chunkObject, 'Demo1')); // true


// Cách 2: sử dụng các array methods
// Filter/Reduce/Map: lọc ra được kết quả là 1 array (value: 1 or 0), check thêm 1 bước
// Some/Every: return boolean
const isExist3 = ((arr, itemCheck) => {
  return arr.some(item => item === itemCheck)
})
console.log(isExist3(chunkArray, 'f')); // false


// Cách 3: sử dụng các includes() => easy way
const isExist4 = ((arr, itemCheck) => {
  return arr.includes(itemCheck)
})
console.log(isExist4(chunkArray, 'a')); // true