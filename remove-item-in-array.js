
/**
 * @param {array} [45,32,56,23]
 * @return {array} [32,56,23]
 */

const arr = [45,32,56,23];

// Cách 1: sử dụng các method có sẵn shift() pop()
const removeItem = (arr) => {
    arr.shift();
    let itemRemoved = arr.shift(); // 45
    return arr
}
// console.log(removeItem(arr)); //[32,56,23]

// Cách 2: sử dụng các method có sẵn shift() pop()
const removeItem2 = (arr) => {
    arr.pop();
    //let itemRemoved = arr.pop(); // 45
    return arr
}
//console.log(removeItem2(arr)); //[ 45, 32, 56 ]

// Cách 3: remove item xác định trước khi biết index: slice() or splice()
// Slice: lấy ra các index slice, dùng concat để nối lại
// Hãy nhớ splice() sẽ làm thay đổi arr gốc, hãy dùng deep or shallow để copy lại 1 array trước khi dùng splice

// Cách 4: remove item khi biết trước value (không phải key)
const removeItem4 = (arr, value) => {
    let index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr
}
//console.log(removeItem4(arr, 56));

// Cách 5: filter() the value
const removeItem5 = (arr, value) => {
    return arr.filter(item => item !== value)
}
//console.log(removeItem5(arr, 56));

const removeItem6 = (arr, value) => {
    let valuesToRemove = [3, 45]
    return arr.filter(item => !valuesToRemove.includes(item))
}
//console.log(removeItem6(arr, 56));
