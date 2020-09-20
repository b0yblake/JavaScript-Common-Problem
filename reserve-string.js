/**
 * @param {string} word
 * @return {string reserve}
 */
// KEY POINT:
// Reserve 1 chuỗi str => phân rã thành array => đảo ngược => nối lại

// Cách 1: sử dụng reverse()
const strReserve1 = (word) => {
    if(!word) return false
    return word.split('').reverse().join('')
}
console.log(strReserve1('apple')); //elppa

// Cách 2: sử dụng loop
const strReserve2 = (word) => {
    if(!word) return false
    let i = word.length,
        wordReserve = ''
    while (i--) {
        wordReserve += word[i]
    }
    return wordReserve
}
console.log(strReserve2('orange')); //egnaro

// Cách 3: dùng đệ quy
// Dùng substr() get ra chuỗi cuối cùng trừ index 1
// Dùng charAt() get ra first index
const strReserve3 = (word) => {
    if(!word) return false
    return reverseString(str.substr(1)) + str.charAt(0);
}
console.log(strReserve2('lemon')); //nomel