// js/maps/katakana_map.js
window.ALL_SCRIPT_DATA = window.ALL_SCRIPT_DATA || {};

window.ALL_SCRIPT_DATA["katakana"] = {
    description: "Japanese Katakana (Hepburn Romanization)",
    unicode_range: ['30A0', '30FF'], // Main block
    to_latin_map: {
        '\u30A2': 'a',    '\u30A4': 'i',    '\u30A6': 'u',    '\u30A8': 'e',    '\u30AA': 'o',
        '\u30AB': 'ka',   '\u30AD': 'ki',   '\u30AF': 'ku',   '\u30B1': 'ke',   '\u30B3': 'ko',
        '\u30B5': 'sa',   '\u30B7': 'shi',  '\u30B9': 'su',   '\u30BB': 'se',   '\u30BD': 'so',
        '\u30BF': 'ta',   '\u30C1': 'chi',  '\u30C4': 'tsu',  '\u30C6': 'te',   '\u30C8': 'to',
        '\u30CA': 'na',   '\u30CB': 'ni',   '\u30CC': 'nu',   '\u30CD': 'ne',   '\u30CE': 'no',
        '\u30CF': 'ha',   '\u30D2': 'hi',   '\u30D5': 'fu',   '\u30D8': 'he',   '\u30DB': 'ho',
        '\u30DE': 'ma',   '\u30DF': 'mi',   '\u30E0': 'mu',   '\u30E1': 'me',   '\u30E2': 'mo',
        '\u30E4': 'ya',   '\u30E6': 'yu',   '\u30E8': 'yo',
        '\u30E9': 'ra',   '\u30EA': 'ri',   '\u30EB': 'ru',   '\u30EC': 're',   '\u30ED': 'ro',
        '\u30EF': 'wa',   '\u30F0': 'wi',   '\u30F1': 'we',   '\u30F2': 'wo',
        '\u30F3': 'n',
        '\u30AC': 'ga',   '\u30AE': 'gi',   '\u30B0': 'gu',   '\u30B2': 'ge',   '\u30B4': 'go',
        '\u30B6': 'za',   '\u30B8': 'ji',   '\u30BA': 'zu',   '\u30BC': 'ze',   '\u30BE': 'zo',
        '\u30C0': 'da',   '\u30C2': 'ji',   '\u30C5': 'zu',   '\u30C7': 'de',   '\u30C9': 'do',
        '\u30D0': 'ba',   '\u30D3': 'bi',   '\u30D6': 'bu',   '\u30D9': 'be',   '\u30DC': 'bo',
        '\u30D1': 'pa',   '\u30D4': 'pi',   '\u30D7': 'pu',   '\u30DA': 'pe',   '\u30DD': 'po',
        '\u30A1': 'a',    '\u30A3': 'i',    '\u30A5': 'u',    '\u30A7': 'e',    '\u30A9': 'o', // small vowels
        '\u30C3': 'small_tsu',
        '\u30E3': 'ya',   '\u30E5': 'yu',   '\u30E7': 'yo', // small y-vowels
        '\u30EE': 'wa', // small wa
        '\u30F5': 'ka',   '\u30F6': 'ke', // small ka, ke
        '\u30F4': 'vu',
        '\u30FD': 'iteration_mark', '\u30FE': 'voiced_iteration_mark',
        '\u30FB': '/',    '\u30FC': '-',
        // Katakana Phonetic Extensions
        '\u31F0': 'small_ku', '\u31F1': 'small_si', '\u31F2': 'small_su', '\u31F3': 'small_to',
        '\u31F4': 'small_nu', '\u31F5': 'small_ha', '\u31F6': 'small_hi', '\u31F7': 'small_fu',
        '\u31F8': 'small_he', '\u31F9': 'small_ho', '\u31FA': 'small_mu', '\u31FB': 'small_ra',
        '\u31FC': 'small_ri', '\u31FD': 'small_ru', '\u31FE': 'small_re', '\u31FF': 'small_ro'
    }
};