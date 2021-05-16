const pw = document.querySelector('.pw');
const copy = document.querySelector('#copy');
const pwLength = document.querySelector('#pw-length');
const upper = document.querySelector('#upper');
const lower = document.querySelector('#lower');
const number = document.querySelector('#number');
const symbol = document.querySelector('#symbol');
const generate = document.querySelector('#generate-pw');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+=-<>?,./|:;"|\{}][';

function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}
function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbols() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}
generate.addEventListener('click', generatePassword);
function generatePassword() {
    const len = pwLength.value;
    let password = '';
    for (let i = 0; i < len; i++) {
        const x = generateX();
        password += x;
    }
    pw.value = password;
}
function generateX() {
    const xs = [];
    if (upper.checked) {
        xs.push(getUppercase());
    }
    if (lower.checked) {
        xs.push(getLowercase());
    }
    if (number.checked) {
        xs.push(getNumber());
    }
    if (symbol.checked) {
        xs.push(getSymbols());
    }
    if (xs.length < 1) {
        return '';
    }
    return xs[Math.floor(Math.random() * xs.length)];
}
const Function = Object.getPrototypeOf(() => { }).constructor;
copy.addEventListener('click', () => {
    pw.select();
    document.execCommand('copy');
})