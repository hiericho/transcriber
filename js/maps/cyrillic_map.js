// js/maps/cyrillic_map.js
window.ALL_SCRIPT_DATA = window.ALL_SCRIPT_DATA || {};

window.ALL_SCRIPT_DATA["cyrillic"] = {
    description: "Cyrillic (primarily Russian, common Slavic)",
    unicode_range: ['0400', '04FF'],
    to_latin_map: {
        '\u0410': 'A',    '\u0430': 'a',
        '\u0411': 'B',    '\u0431': 'b',
        '\u0412': 'V',    '\u0432': 'v',
        '\u0413': 'G',    '\u0433': 'g',
        '\u0414': 'D',    '\u0434': 'd',
        '\u0415': 'E',    '\u0435': 'e',
        '\u0401': 'Yo',   '\u0451': 'yo',
        '\u0416': 'Zh',   '\u0436': 'zh',
        '\u0417': 'Z',    '\u0437': 'z',
        '\u0418': 'I',    '\u0438': 'i',
        '\u0419': 'Y',    '\u0439': 'y', // Short I
        '\u041A': 'K',    '\u043A': 'k',
        '\u041B': 'L',    '\u043B': 'l',
        '\u041C': 'M',    '\u043C': 'm',
        '\u041D': 'N',    '\u043D': 'n',
        '\u041E': 'O',    '\u043E': 'o',
        '\u041F': 'P',    '\u043F': 'p',
        '\u0420': 'R',    '\u0440': 'r',
        '\u0421': 'S',    '\u0441': 's',
        '\u0422': 'T',    '\u0442': 't',
        '\u0423': 'U',    '\u0443': 'u',
        '\u0424': 'F',    '\u0444': 'f',
        '\u0425': 'Kh',   '\u0445': 'kh',
        '\u0426': 'Ts',   '\u0446': 'ts',
        '\u0427': 'Ch',   '\u0447': 'ch',
        '\u0428': 'Sh',   '\u0448': 'sh',
        '\u0429': 'Shch', '\u0449': 'shch',
        '\u042A': '"',    '\u044A': '"',    // Hard Sign
        '\u042B': 'Y',    '\u044B': 'y',    // Yeru
        '\u042C': "'",    '\u044C': "'",    // Soft Sign
        '\u042D': 'E',    '\u044D': 'e',    // E
        '\u042E': 'Yu',   '\u044E': 'yu',
        '\u042F': 'Ya',   '\u044F': 'ya',

        '\u0402': 'Dj',   '\u0452': 'dj',   // Serbian Đ
        '\u0403': 'Gj',   '\u0453': 'gj',   // Macedonian Ǵ
        '\u0404': 'Ye',   '\u0454': 'ye',   // Ukrainian Є
        '\u0405': 'Dz',   '\u0455': 'dz',   // Macedonian S
        '\u0406': 'I',    '\u0456': 'i',    // Ukrainian/Belarusian І (Note: 'I'/'i' is also used for И/и)
        '\u0407': 'Yi',   '\u0457': 'yi',   // Ukrainian Ї
        '\u0408': 'J',    '\u0458': 'j',    // Serbian/Macedonian Ј
        '\u0409': 'Lj',   '\u0459': 'lj',   // Serbian/Macedonian Љ
        '\u040A': 'Nj',   '\u045A': 'nj',   // Serbian/Macedonian Њ
        '\u040B': 'Tsh',  '\u045B': 'tsh',  // Serbian Ć
        '\u040C': 'Kj',   '\u045C': 'kj',   // Macedonian Ḱ
        '\u040E': 'W',    '\u045E': 'w',    // Belarusian Ў (or Ŭ/ŭ)
        '\u040F': 'Dzh',  '\u045F': 'dzh',  // Serbian/Macedonian Џ
        '\u0490': 'Gg',   '\u0491': 'gg'    // Ukrainian Ґ
    }
};