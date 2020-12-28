/**
 * @param {string} word
 * @return {string remove first & lastest}
 */
// KEY POINT:
// Cho trước 1 chuỗi str => remove first char & lastest char (bỏ qua khoảng trống)

// Cách 1: sử dụng charAt
const strRemove = (str) => {
    if(!str) return
    let strLength = str.length
    str = str.trim()
    return str.substring(1,strLength-1)
}
console.log(strRemove('apple orange')); //pple orang


