// Simple Runic to Latin map
const runicToLatin = {
    '\u16A0': 'f',    '\u16A2': 'u',    '\u16A6': 'th',   '\u16A8': 'a',
    '\u16B1': 'r',    '\u16B2': 'k',    '\u16B7': 'g',    '\u16B9': 'w',
    '\u16BA': 'h',    '\u16BC': 'n',    '\u16BE': 'i',    '\u16C1': 'j',
    '\u16C7': 'eo',   '\u16C8': 'p',    '\u16C9': 'z',    '\u16CB': 's',
    '\u16CF': 't',    '\u16D2': 'b',    '\u16D6': 'e',    '\u16D7': 'm',
    '\u16DA': 'l',    '\u16DD': 'ng',   '\u16DE': 'd',    '\u16DF': 'o',
    '\u16A9': 'o_as', '\u16AB': 'ae',   '\u16AC': 'y',
    '\u16AD': 'io',   '\u16AE': 'ea',   '\u16B3': 'c',
    '\u16B8': 'g_as', '\u16E1': 'st',   '\u16B4': 'k_yf',
    '\u16E6': 'R_yf', '\u16EB': ':',    '\u16EC': '*',    '\u16ED': '+'
};

// Function to convert a Runic string to Latin
function runicToLatinText(runicStr) {
    return Array.from(runicStr).map(char => runicToLatin[char] || char).join('');
} // Export the function for use in other modules

// Example usage:
// const runicSample = '\u16A0\u16A2\u16A6'; // ᚠᚢᚦ
// console.log(runicToLatinText(runicSample)); // Output: futh
