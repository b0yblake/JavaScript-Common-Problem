
/**
 * @param {string}
 * @return {string} 
 */

const arr = [7, "ate", "", false, 9];

const removeFalsy = (arr) => {
    return arr.filter(item => item)
}
console.log(removeFalsy(arr));
