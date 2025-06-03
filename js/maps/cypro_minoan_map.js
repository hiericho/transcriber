// js/maps/cypro_minoan_map.js
window.ALL_SCRIPT_DATA = window.ALL_SCRIPT_DATA || {};

window.ALL_SCRIPT_DATA["cypro_minoan"] = {
    description: "Cypro-Minoan (Largely Undeciphered - Conventional Labels)",
    unicode_range: ['10780', '107BF'],
    to_latin_map: {
        '\uD801\uDF80': 'CM001',  // U+10780
        '\uD801\uDF81': 'CM002',  // U+10781
        '\uD801\uDF82': 'CM003',  // U+10782
        '\uD801\uDF83': 'CM004',  // U+10783
        '\uD801\uDF84': 'CM005',  // U+10784
        '\uD801\uDF85': 'CM006',  // U+10785
        '\uD801\uDF86': 'CM007',  // U+10786
        '\uD801\uDF87': 'CM008',  // U+10787
        '\uD801\uDF88': 'CM009',  // U+10788
        '\uD801\uDF89': 'CM010',  // U+10789
        '\uD801\uDF8A': 'CM011',  // U+1078A
        '\uD801\uDF8B': 'CM012',  // U+1078B
        '\uD801\uDF8C': 'CM013',  // U+1078C
        '\uD801\uDF8D': 'CM014',  // U+1078D
        '\uD801\uDF8E': 'CM015',  // U+1078E
        '\uD801\uDF8F': 'CM016',  // U+1078F
        '\uD801\uDF90': 'CM017',  // U+10790
        '\uD801\uDF91': 'CM018',  // U+10791
        '\uD801\uDF92': 'CM019',  // U+10792
        '\uD801\uDF93': 'CM020',  // U+10793
        '\uD801\uDF94': 'CM021',  // U+10794
        '\uD801\uDF95': 'CM022',  // U+10795
        '\uD801\uDF96': 'CM023',  // U+10796
        '\uD801\uDF97': 'CM024',  // U+10797
        '\uD801\uDF98': 'CM025',  // U+10798
        '\uD801\uDF99': 'CM026',  // U+10799
        '\uD801\uDF9A': 'CM027',  // U+1079A
        '\uD801\uDF9B': 'CM028',  // U+1079B
        '\uD801\uDF9C': 'CM029',  // U+1079C
        '\uD801\uDF9D': 'CM030',  // U+1079D
        '\uD801\uDF9E': 'CM031',  // U+1079E
        '\uD801\uDF9F': 'CM032',  // U+1079F
        '\uD801\uDFA0': 'CM033',  // U+107A0
        '\uD801\uDFA1': 'CM034',  // U+107A1
        '\uD801\uDFA2': 'CM035',  // U+107A2
        '\uD801\uDFA3': 'CM036',  // U+107A3
        '\uD801\uDFA4': 'CM037',  // U+107A4
        '\uD801\uDFA5': 'CM038',  // U+107A5
        '\uD801\uDFA6': 'CM039',  // U+107A6
        '\uD801\uDFA7': 'CM040',  // U+107A7
        '\uD801\uDFA8': 'CM041',  // U+107A8
        '\uD801\uDFA9': 'CM042',  // U+107A9
        '\uD801\uDFAA': 'CM043',  // U+107AA
        '\uD801\uDFAB': 'CM044',  // U+107AB
        '\uD801\uDFAC': 'CM045',  // U+107AC
        '\uD801\uDFAD': 'CM046',  // U+107AD
        '\uD801\uDFAE': 'CM047',  // U+107AE
        '\uD801\uDFAF': 'CM048',  // U+107AF
        '\uD801\uDFB0': 'CM049',  // U+107B0
        '\uD801\uDFB1': 'CM050',  // U+107B1
        '\uD801\uDFB2': 'CM051',  // U+107B2
        '\uD801\uDFB3': 'CM052',  // U+107B3
        '\uD801\uDFB4': 'CM053',  // U+107B4
        '\uD801\uDFB5': 'CM054',  // U+107B5
        '\uD801\uDFB6': 'CM055',  // U+107B6
        '\uD801\uDFB7': 'CM056',  // U+107B7
        '\uD801\uDFB8': 'CM057',  // U+107B8
        '\uD801\uDFB9': 'CM058',  // U+107B9
        '\uD801\uDFBA': 'CM059',  // U+107BA
        '\uD801\uDFBB': 'CM060',  // U+107BB
        '\uD801\uDFBC': 'CM061',  // U+107BC
        '\uD801\uDFBD': 'CM062',  // U+107BD
        '\uD801\uDFBE': 'CM063',  // U+107BE
        '\uD801\uDFBF': 'CM064'   // U+107BF
    }
};
// Note: JavaScript strings handle Unicode Supplementary Plane characters (like Cypro-Minoan)
// using surrogate pairs. For example, U+10780 becomes '\uD801\uDF80'.
// Python's '\U00010780' is more direct. Ensure your JS logic correctly handles these if iterating by "character".
// String.prototype.startsWith and direct object key access should work fine.