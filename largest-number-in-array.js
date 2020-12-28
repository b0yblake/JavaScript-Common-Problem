/**
 * @param {array} array
 * @return {num or array}
 */

// KEY POINT:
// Tìm ra số lớn nhất trong 1 array
// Mảng truyền vào có thể là 1 hoặc nhiều mảng

// Cách 1: dùng loop 
const randomArray = [1,5,12,9,434,67,54];
const largestNum = (array) => {
    let tmpNum = 0;
    array.forEach(element => {
        if(element > tmpNum) tmpNum = element;
    });
    return tmpNum;
}

console.log(largestNum(randomArray)); //434

const randomArray2 = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
const largestNum2 = (array) => {
  let tmpNum = 0;
  let arrTmp = [];
  array.forEach(element => {
    element.forEach(ele => {
      if(ele > tmpNum) tmpNum = ele
    })
    arrTmp.push(tmpNum)
    tmpNum = 0;
  });
  return arrTmp;
}
console.log(largestNum2(randomArray2)); //[5,27,39,1001]


// Cách 2: dùng map method 
// Dùng map để duyệt qua từng item của array tổng (bản chất của map() là duyệt qua từng item của array và trả lại 1 array mới sau khi thực hiện logic nào đó)
// Dùng reduce để so sánh các item con của array child, lấy giá trị lớn nhất rồi trả về kết quả duy nhất,
const randomArray3 = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
const largestNum3 = (array) => {
  return array.map((item) => {
    console.log(item)
    return item.reduce((acc, cur) => {
      return (cur > acc) ? cur : acc
    }, 0);
  }) 
}
console.log(largestNum3(randomArray3));




