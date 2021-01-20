/**
 * @param {array} array
 * @return {array}
 */

const files = [ 'foo.txt ', '.bar', '   ', 'baz.foo' ];

// Cách 1: sử dụng các loại for loop thông dụng: "for", "for of", "for in", "forEach"
const appendTemplatePath = (files => {
    let listFiles = []
    for(let i = 0; i < files.length;i++) {
        let file = files[i].trim() //xoá khoảng trống
        if(file) {
            listFiles.push(file)
        }
    }
    return listFiles
})
appendTemplatePath(files) //["../path/foo.txt", "../path/.bar", "../path/baz.foo"]

//Cách 2. Dùng map: bản thân map là 1 method prototype của Array, sẽ trả về 1 array mới với từng item đc loop và xử lý.
// Lưu ý: nếu item loop k đúng điều kiện, thì sẽ vẫn sinh ra 1 item mới nhưng là undefined
const appendTemplatePath2 = (files => {
    const filePaths = files
    .map(file => file.trim())
    .filter(Boolean)
    .map(file => `../path/${file}`)
    return filePaths
})
appendTemplatePath2(files) //["../path/foo.txt", "../path/.bar", "../path/baz.foo"]

//Cách 3. Sử dụng reduce: reduce là quá trình tái tổ hợp, cũng là loop từng item, nhưng tùy vào key word ở callbacks, sẽ tạo ra các loại khác nhau.
// [] tạo ra 1 array mới của biến filePaths
const appendTemplatePath3 = (files => {
    const filePaths = files.reduce((acc, file) => {
        const fileName = file.trim();
        if(fileName) {
          const filePath = `../path/${fileName}`;
          acc.push(filePath);
        }
        return acc;
    }, []);
    return filePaths
})
console.log(appendTemplatePath3(files)) //["../path/foo.txt", "../path/.bar", "../path/baz.foo"]