
/**
 * @param {Str | NaN | NULL | Undefined}
 * @return {Boolean} 
 */

// Cách 1. sử dụng typeof 
// Sử dụng cấu trúc && để return: nếu 2 vế cùng true thì mới return true, không thì sẽ return false
// Với kiểu NaN sẽ vượt qua được kiểu typeof, nhưng khi so sánh tuyệt đối thì NaN sẽ không bằng với chính nó
const isNumber = (val => typeof val === 'number' && val === val)
console.log(isNumber(1)); // true
console.log(isNumber('1')); // false
console.log(isNumber(NaN)); // false

// Cách 2. Sử dụng Native method isInteger() or isSafeInteger() của đối tượng Number
// Ra đời tại phiên bản ES5
// https://www.w3schools.com/js/js_es6.asp
const isNumber2 = (val => Number.isInteger(val))
console.log(isNumber2(1)); // true
console.log(isNumber2('1')); // false
console.log(isNumber2(NaN)); // false