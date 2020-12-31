// We need to chunk (split) the main array into many array child with common item index.

/**
 * @param {array} [45,32,56,2,8,9,0,11,56,3334,100,1110,4343]
 * @return {array} [[45,32],[56,2],[8,9],[0,11],[56,3334],[100,1110],[4343]]
 */

const arr = [45,32,56,2,8,9,0,11,56,3334,100,1110,4343];

// Cách 1: sử dụng loop (lazy thinking) or use map()
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

// Cách 2: sử dụng slice
// Slice(start,end) -> sẽ lấy từ item start, item end sẽ không lấy (lấy item trước item end)
const chunkArrInGroup2 = (listItem, num) => {
    let tmpArr = [],
        index = 0;
    while (index < listItem.length) {
        tmpArr.push(listItem.slice(index, index+num))
        index+=num
    }
    return tmpArr
}
//console.log(chunkArrInGroup2(arr, 2));

// Cách 3: sử dụng splice
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// splice(start, end, optional)
// Không khuyến cáo sử dụng cách này, vì 1 số trường hợp shallow copy không copy được nest array (splice làm thay đổi array gốc)
const chunkArrInGroup3 = (listItem, num) => {
    let tmpArr = [],
        cloneArr = [...listItem]; //shallow copy
    while (cloneArr.length) {
        tmpArr.push(cloneArr.splice(0, num));
    }
    return tmpArr;
}
//console.log(chunkArrInGroup3(arr, 2));

// Cách 4: sử dụng recursion
const chunkArrInGroup4 = (listItem, num) => {
    if (listItem.length === 0) return []; 
    else return [listItem.slice(0, num)].concat(chunkArrInGroup4(listItem.slice(num), num)); 
}
console.log(chunkArrInGroup4(arr, 2));



