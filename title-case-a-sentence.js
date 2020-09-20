/**
 * @param {string} word
 * @return {string (Capitalize the first word of sentence)}
 */
// KEY POINT:
// Phân rã str thành array cách nhau dấu "."
// Điểm yếu: chưa trim() bỏ dấu thừa -> dài dòng do nối chuỗi
// Sử dụng charAt() để tìm item đầu tiên -> toUpperCase -> nối với chuỗi còn lại (slice(1,n))

const word = 'the biggest111 word bigges2..this Is second sentence';

// Cách 1: sử dụng loop
const capitalizeSentence = word => {
    let source = word.split('.')
    let i = source.length
    let tmpStr = ''
    while(i--) {
        let count = source[i].length
        tmpStr += source[i].charAt(0).toUpperCase() + source[i].slice(1, count)
    }
    return tmpStr
}
// console.log(capitalizeSentence(word));

// Cách 2: sử dụng Map() => giống cách 1 => cũng nối chuỗi
// Sử dụng template string

// const capitalizeSentence4 = word => {
//     let source = word.split('.')
//     word.split(/ /g).map(word => `${word.substring(0,1).toUpperCase()}${word.substring(1)}`).join("");
// }
// console.log(capitalizeSentence4(word));

// Cách 3: sử dụng regex 
const capitalizeSentence3 = word => {
    let source = word.split('.')
    // Cấu trúc regex "/\b[a-z]/g" sẽ search global phần tử a-z (viết thường)
    // \b nhằm tìm first char của từng word có trong string
    source.map((item) => {
        // console.log(`item: ${item}`)

        item.replace(/\b[a-z]/g, x => x.toUpperCase())
    })
    
    // return source   
}
console.log(capitalizeSentence3(word));



