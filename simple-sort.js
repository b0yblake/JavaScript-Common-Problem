/**
 * @param {array/object} // array/object
 * @return {array} array/object sorted
 */

const staffArray = [12,4,1,0,-9,45,41,11];

 const staffObject = [
  {
    name: 'Joe',
    years: 10,
  },
  {
    name: 'Theo',
    years: 5,
  },
  {
    name: 'Atomic',
    years: 1,
  },
  {
    name: 'Dyan',
    years: 10,
  },
];

// Cách 1: sử dụng các hàm sort có sẵn sort()
// Việc dùng a,b truyền vào như 1 đối số giữa 2 item

const sortByYears = (a, b) => {
  if (a.years === b.years) {
    return 0;
  }
  return a.years - b.years;
}
const sortByName = (a, b) => {
  if (a.name === b.name) {
    return 0;
  }
  return a.name > b.name ? 1 : -1;
};

console.log(staffArray.sort((a,b) => b - a)); // [45,41,12,11,4,1,0,-9]
console.log(staff.sort(sortByYears));

// Cách 2: sử dụng các thuật toán sort hay dùng














