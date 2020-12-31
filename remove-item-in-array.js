
/**
 * @param {array} [45,32,56,23]
 * @return {array} [32,56,23]
 */

const arr = [45,32,56,23];

// Cách 1: sử dụng các method có sẵn shift() pop()
const removeItem = function(arr) {
    arr.shift();
    return arr
}
console.log(removeItem(arr));
