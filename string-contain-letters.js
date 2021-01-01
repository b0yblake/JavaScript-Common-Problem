// Check if source string contains all the letters from test string

/**
 * @param {string}
 * @return {string} 
 */

const checkStr = (str, strCheck) => {
    let str = str.toLowerCase();
    let strCheck = strCheck.toLowerCase();
    for (i=0;i<strCheck.length;i++) {
        if (str.indexOf(strCheck[i]) === -1)
        return false;
    }
    return true;
}

