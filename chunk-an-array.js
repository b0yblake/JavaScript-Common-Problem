// We need to chunk (split) the main array into many array child with common item index.

/**
 * @param {array} []
 * @return {array}
 */

const arr = [45,32,56,2,8,9,0,11,56,3334,100,1110,4343];

// Cách 1: sử dụng loop (lazy thinking)
const chunkArrInGroup = (listItem, num) => {
    if(listItem.length <= num) return listItem
    let tmpArrSum = [],
        tmpArrSum2 = [],
        i = 1;
    listItem.forEach(n => {
        tmpArrSum2.push(n)
        if(i >= num) {
            tmpArrSum.push(tmpArrSum2);
            tmpArrSum2 = [];
            i = 0;
        }
        i++
    });
    return tmpArrSum
}
//console.log(chunkArrInGroup(arr, 2));

// Cách 2: sử dụng map
const chunkArrInGroup2 = (listItem, num) => {
    return listItem.map(n => {
        //console.log(n)
        // if(n > 1000) return n
    })
}
console.log(chunkArrInGroup2(arr, 2));



