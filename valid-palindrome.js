/**
 * @param {string} str
 * @return {boolean}
 */

// KEY POINT:
// Check "s" giá trị truyền vào khỏi null, undefined, '' trước
// Dùng pregmath để lấy ra item thuộc bảng chữ cái và số (bỏ dấu: "," | ":" | " " |...)
// Dùng đảo ngược array rồi nối lại để so khớp

// Cách 1: sử dụng logic thông thường: fetch từng item => regex item => push in new str => reserve str mới => check với str cũ
// var regex = /[^A-Za-z0-9]/g;
const isPalindrome1 = function(str) {
    if(str === null || str === undefined) return false
    if(str.length === 1 || str.toString().trim() === '') return true
    
    let tmp = str.toString().toLocaleLowerCase().split(''),
        i = str.length,
        tmpStr = '',
        regex = /[^A-Za-z0-9]/g
    while (i--) {
        if(tmp[i].match(regex)) tmpStr += (tmp[i]) // dùng pregmath
    }
    if(tmpStr.split('').reverse().join('') === tmpStr) return true
    return false
};

// Cách 2: sử dụng toán tử so sánh === để return trực tiếp (viết rút gọn)
// Dùng [\W_] pregmath phát hiện chữ cái và số (equal to [^a-zA-Z0-9_])
const isPalindrome2 = (str) => {
    return  str.replace(/[\W_]/g, '').toLowerCase() === str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}