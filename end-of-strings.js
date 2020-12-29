//Check if a string (first argument, str) ends with the given target string (second argument, target).

/**
 * @param {string / target-str} str
 * @return {boolean}
 */

// Cách 1: sử dụng split & array
const lastStr = (str, target) => {
    let lastStr = str.split(' ').pop()
    return (lastStr === target) ? true : false
}
console.log(lastStr('ends with the given target string', 'string'))

// Cách 2: sử dụng substr()
const lastStr2 = (str, target) => {
    let lastChar = str.substr(str.length-1,str.length)
    return (lastChar === target) ? true : false
}
console.log(lastStr2('string', 'g'))

// Cách 3: sử dụng endWith()
const lastStr3 = (str, target) => {
    return str.endsWith(target)
}
console.log(lastStr3('given', 'n'))

// Cách 3: sử dụng endWith()
const lastStr3 = (str, target) => {
    return str.endsWith(target)
}
console.log(lastStr3('given', 'n'))