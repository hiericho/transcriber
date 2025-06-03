// js/maps/yi_map.js
window.ALL_SCRIPT_DATA = window.ALL_SCRIPT_DATA || {};

window.ALL_SCRIPT_DATA["yi"] = {
    description: "Yi Syllables (Nuosu Yi Pinyin)",
    unicode_range: ['A000', 'A4CF'],
    to_latin_map: {
        // Partial mapping for demonstration. Extend as needed.
        '\uA000': 'a',    '\uA001': 'ap',   '\uA002': 'ax',   '\uA003': 'at',
        '\uA004': 'ex',   '\uA005': 'e',    '\uA006': 'ep',   '\uA007': 'et',
        '\uA008': 'ix',   '\uA009': 'i',    '\uA00A': 'ip',   '\uA00B': 'it',
        '\uA00C': 'ox',   '\uA00D': 'o',    '\uA00E': 'op',   '\uA00F': 'ot',
        '\uA010': 'ux',   '\uA011': 'u',    '\uA012': 'up',   '\uA013': 'ut',
        '\uA014': 'y',    '\uA015': 'yt',   '\uA016': 'yix',  '\uA017': 'yi',
        '\uA018': 'yip',  '\uA019': 'yit',  '\uA01A': 'yiex', '\uA01B': 'yie',
        '\uA01C': 'yiep', '\uA01D': 'yiet', '\uA01E': 'yuox','\uA01F': 'yuo',
        '\uA020': 'yuop','\uA021': 'yuot', '\uA022': 'yux',  '\uA023': 'yu',
        '\uA024': 'yup',  '\uA025': 'yut',  '\uA026': 'yurx','\uA027': 'yur',
        // Yi Radicals (A490–A4C6)
        '\uA490': 'rad_a',   '\uA491': 'rad_ka',  '\uA492': 'rad_xi',  '\uA493': 'rad_tsha',
        '\uA494': 'rad_za',  '\uA495': 'rad_nga', '\uA496': 'rad_ha',  '\uA497': 'rad_lia',
        '\uA498': 'rad_ma',  '\uA499': 'rad_nap', '\uA49A': 'rad_mi',  '\uA49B': 'rad_nu',
        '\uA49C': 'rad_hxuo','\uA49D': 'rad_lie','\uA49E': 'rad_ci',   '\uA49F': 'rad_zzyp',
        // Refer to the Unicode standard for Yi Radicals (A490–A4C6) to add additional mappings as needed.
        '\uA4A0': 'rad_ji',   '\uA4A1': 'rad_qa',   '\uA4A2': 'rad_qie',  '\uA4A3': 'rad_zuo',
        '\uA4A4': 'rad_dzup', '\uA4A5': 'rad_cy',   '\uA4A6': 'rad_zha',  '\uA4A7': 'rad_za',
        '\uA4A8': 'rad_jo',   '\uA4A9': 'rad_nzup', '\uA4AA': 'rad_zziet','\uA4AB': 'rad_zyt',
        '\uA4AC': 'rad_za',   '\uA4AD': 'rad_zy',   '\uA4AE': 'rad_zyr',  '\uA4AF': 'rad_zyrx',
        '\uA4B0': 'rad_zyt',  '\uA4B1': 'rad_zyx',  '\uA4B2': 'rad_zyr',  '\uA4B3': 'rad_zyrx',
        '\uA4B4': 'rad_zyt',  '\uA4B5': 'rad_zyx',  '\uA4B6': 'rad_zyr',  '\uA4B7': 'rad_zyrx',
        '\uA4B8': 'rad_zyt',  '\uA4B9': 'rad_zyx',  '\uA4BA': 'rad_zyr',  '\uA4BB': 'rad_zyrx',
        '\uA4BC': 'rad_zyt',  '\uA4BD': 'rad_zyx',  '\uA4BE': 'rad_zyr',  '\uA4BF': 'rad_zyrx',
        '\uA4C0': 'rad_zyt',  '\uA4C1': 'rad_zyx',  '\uA4C2': 'rad_zyr',  '\uA4C3': 'rad_zyrx',
        '\uA4C4': 'rad_zyt',  '\uA4C5': 'rad_zyx',  '\uA4C6': 'rad_zyr'
    }
};