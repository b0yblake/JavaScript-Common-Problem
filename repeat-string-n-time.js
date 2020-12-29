/**
 * @param {string} word
 * @return {string reserve}
 */

// Cách 1: sử dụng loop (for, while) = array push
const repeatStr = (str, times) => {
    let tmpStr = ''
    while (times > 0) {
        tmpStr+= str
        times--
    }
    return tmpStr
}
console.log(repeatStr('abc ', 10))

// Cách 2: sử dụng đệ quy (Recursion)
const repeatStr2 = (str, times) => {

    //Base
    if(times === 1) return str

    //Recursive Step
    return str + repeatStr2(str, times-1)
}
console.log(repeatStr2('cde ', 5))

// Cách 3: sử dụng ES6 repeat method
const repeatStr3 = (str, times) => {
    return (times > 0) ? str.repeat(times) : ''

}
console.log(repeatStr3('gfd ', 6))