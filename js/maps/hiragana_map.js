// js/maps/hiragana_map.js
window.ALL_SCRIPT_DATA = window.ALL_SCRIPT_DATA || {};

window.ALL_SCRIPT_DATA["hiragana"] = {
    description: "Japanese Hiragana (Hepburn Romanization)",
    unicode_range: ['3040', '309F'],
    to_latin_map: {
        '\u3042': 'a',    '\u3044': 'i',    '\u3046': 'u',    '\u3048': 'e',    '\u304A': 'o',
        '\u304B': 'ka',   '\u304D': 'ki',   '\u304F': 'ku',   '\u3051': 'ke',   '\u3053': 'ko',
        '\u3055': 'sa',   '\u3057': 'shi',  '\u3059': 'su',   '\u305B': 'se',   '\u305D': 'so',
        '\u305F': 'ta',   '\u3061': 'chi',  '\u3064': 'tsu',  '\u3066': 'te',   '\u3068': 'to',
        '\u306A': 'na',   '\u306B': 'ni',   '\u306C': 'nu',   '\u306D': 'ne',   '\u306E': 'no',
        '\u306F': 'ha',   '\u3072': 'hi',   '\u3075': 'fu',   '\u3078': 'he',   '\u307B': 'ho',
        '\u307E': 'ma',   '\u307F': 'mi',   '\u3080': 'mu',   '\u3081': 'me',   '\u3082': 'mo',
        '\u3084': 'ya',   '\u3086': 'yu',   '\u3088': 'yo',
        '\u3089': 'ra',   '\u308A': 'ri',   '\u308B': 'ru',   '\u308C': 're',   '\u308D': 'ro',
        '\u308F': 'wa',   '\u3090': 'wi',   '\u3091': 'we',   '\u3092': 'o', // WO as particle
        '\u3093': 'n',
        '\u304C': 'ga',   '\u304E': 'gi',   '\u3050': 'gu',   '\u3052': 'ge',   '\u3054': 'go',
        '\u3056': 'za',   '\u3058': 'ji',   '\u305A': 'zu',   '\u305C': 'ze',   '\u305E': 'zo',
        '\u3060': 'da',   '\u3062': 'ji',   '\u3065': 'zu',   '\u3067': 'de',   '\u3069': 'do',
        '\u3070': 'ba',   '\u3073': 'bi',   '\u3076': 'bu',   '\u3079': 'be',   '\u307C': 'bo',
        '\u3071': 'pa',   '\u3074': 'pi',   '\u3077': 'pu',   '\u307A': 'pe',   '\u307D': 'po',
        '\u3041': 'a',    '\u3043': 'i',    '\u3045': 'u',    '\u3047': 'e',    '\u3049': 'o', // small vowels
        '\u3063': 'small_tsu',
        '\u3083': 'ya',   '\u3085': 'yu',   '\u3087': 'yo', // small y-vowels
        '\u308E': 'wa', // small wa
        '\u309D': 'iteration_mark', '\u309E': 'voiced_iteration_mark',
        '\u3001': ',',    '\u3002': '.',    '\u30FB': '/',    '\u30FC': '-',
        '\u3095': 'k',    '\u3096': 'ke' // small archaic
    }
};