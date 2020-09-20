/**
 * @param {string} str
 * @return {string}
 */

// KEY POINT:
// Tìm word dài nhất trong string


// Cách 1: dùng loop
const longestWord = (str) => {
    if(!str) return false

    let tmp = str.split(' '),
        tmpArr = '',
        tmpLongestLength = 0,
        a3 = []
    for(let i = 0; i < tmp.length; i++) {
        if(tmp[i].length > tmpLongestLength) {
            tmpArr = tmp[i]
            tmpLongestLength = tmp[i].length
        }
    }
    return tmpArr
}
console.log(longestWord('A big angl hero 6'));



