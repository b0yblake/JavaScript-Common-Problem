/**
 * @param {string}
 * @return {object}
 */

const cookieHttp = 'foo=bar; equation=E%3Dmc%5E2';

const parseCookie = (str) => {
    return str.split(';')
        .map(v => v.split('='))
        .reduce((acc, v) => {
            acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
            return acc;
        }, {})
}

console.log(parseCookie(cookieHttp)) //{ foo: 'bar', equation: 'E=mc^2' }








