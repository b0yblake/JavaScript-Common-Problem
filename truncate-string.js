// We need to reduce the length of the string or truncate it if it is longer than the given maximum length specified and add ... to the end. If it is not that long then we keep it as is.

/**
 * @param {string / array} word
 * @return {string}
 */

// Cách 1: sử dụng substr() 
// Dùng substr() khi làm việc với str
const truncateStr = (str, limit) => {
    return (str.length > limit) ? (str.substr(0, limit)+'...') : str
}
console.log(truncateStr('string or truncate it if it is longer than', 19))

// Cách 2: sử dụng slice()
// Dùng slice() khi làm việc với mảng
const truncateStr2 = (str, limit) => {
    return str.length > limit ? str.slice(0, limit) + '...' : str
}
console.log(truncateStr2('If it is not that long then we keep it as is.', 19))
