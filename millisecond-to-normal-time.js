/**
 * @param {number} millisecond
 * @return {str}
 */

// KEY POINT:
// Cho trước số giờ chuyển về millisecond, convert sang kiểu người dùng

const MILLISECOND_BY_DAY  = 456454
const MILLISECOND_BY_YEAR = 34325055574

const formatDuration = ms => {
    if(ms < 0) ms = -ms
    //Declare the obj with immutable value
    const time = {
        day: Math.floor(ms / 86400000),
        hour: Math.floor(ms / 3600000) % 24,
        minute: Math.floor(ms / 60000) % 60,
        second: Math.floor(ms / 1000) % 60,
        millisecond: Math.floor(ms) % 1000
    };

    return Object.entries(time)                                         // Chuyển thành mảng (array)
        .filter(item => item[1] !== 0)                                  // Chạy qua filter đảm bảo rằng số không được === 0 
        .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)    // Render từng item với [key, val] loop
        .join(', ');                                                    // Nối lại từ array để dễ nhìn
}

console.log(formatDuration(MILLISECOND_BY_YEAR));
