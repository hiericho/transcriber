// js/maps/morse_map.js
window.ALL_SCRIPT_DATA = window.ALL_SCRIPT_DATA || {};

window.ALL_SCRIPT_DATA["morse"] = {
    description: "Morse Code Transliteration",
    letter_separator: ' ',
    word_separator: ' / ',
    // For Morse, the actual maps are more useful directly in the script.js logic
    // but we can define them here for consistency.
    latin_to_morse: {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
        'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
        'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
        'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
        'Y': '-.--', 'Z': '--..',
        '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
        '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
        '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--',
        '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...',
        ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-',
        '"': '.-..-.', '$': '...-..-', '@': '.--.-.',
        ' ': ' / ' // Special: space maps to word separator
    },
    morse_to_latin: {} // Will be populated
};
// Populate morse_to_latin
for (const key in window.ALL_SCRIPT_DATA["morse"].latin_to_morse) {
    if (key !== ' ') { // Exclude the space to word_separator mapping for reverse
        window.ALL_SCRIPT_DATA["morse"].morse_to_latin[window.ALL_SCRIPT_DATA["morse"].latin_to_morse[key]] = key;
    }
}
// The main script.js will use these directly.
// We can also assign to the expected to_latin/from_latin for generic functions.
window.ALL_SCRIPT_DATA["morse"].to_latin_map = window.ALL_SCRIPT_DATA["morse"].morse_to_latin;
window.ALL_SCRIPT_DATA["morse"].from_latin_map = window.ALL_SCRIPT_DATA["morse"].latin_to_morse;