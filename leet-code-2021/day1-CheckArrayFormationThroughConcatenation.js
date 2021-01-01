/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    arr.forEach(item => {
        console.log('item: ', item)
        pieces.forEach(item2 => {
            return (item2.includes(item)) ? true : false
        })
    })
};

console.log(canFormArray([91,4,64,78], [[78],[4,64],[91]]));
