/**
 * @param {num} num
 * @return {num}
 */

// KEY POINT:
// Tính giai thừa của 1 số nguyên dương (negative)

// Cách 1: dùng loop
const factorialize1 = (num) => {
    if(!num || num < 0) return false
    if(num === 0) return 1
    let i = 1,
    tmp = 1
    while (i <= num) {
        tmp *= i
        i++
    }
    return tmp
}
console.log(factorialize1(6));

// Cách 2: dùng đệ quy
const factorialize2 = (num) => {
    if(!num || num < 0) return false
    if(num === 0) return 1

    return num * factorialize2(num-1)
}
console.log(factorialize1(6));