// js/maps/mende_kikakui_map.js
window.ALL_SCRIPT_DATA = window.ALL_SCRIPT_DATA || {};

window.ALL_SCRIPT_DATA["mende_kikakui"] = {
    description: "Mende Kikakui Syllabary",
    unicode_range: ['1F800', '1F8FF'],
    to_latin_map: {
        '\uD83E\uDE00': 'a',    // U+1F800
        '\uD83E\uDE01': 'i',    // U+1F801
        '\uD83E\uDE02': 'u',    // U+1F802
        '\uD83E\uDE03': 'e',    // U+1F803
        '\uD83E\uDE04': 'o',    // U+1F804
        '\uD83E\uDE05': 'in',   // U+1F805
        '\uD83E\uDE06': 'an',   // U+1F806
        '\uD83E\uDE07': 'en',   // U+1F807
        '\uD83E\uDE08': 'un',   // U+1F808
        '\uD83E\uDE09': 'ki',   // U+1F809
        '\uD83E\uDE0A': 'ka',   // U+1F80A
        '\uD83E\uDE0B': 'ku',   // U+1F80B
        '\uD83E\uDE0C': 'ke',   // U+1F80C
        '\uD83E\uDE0D': 'ko',   // U+1F80D
        '\uD83E\uDE0E': 'kin',  // U+1F80E
        '\uD83E\uDE0F': 'kan',  // U+1F80F
        '\uD83E\uDE10': 'ken',  // U+1F810
        '\uD83E\uDE11': 'kun',  // U+1F811
        '\uD83E\uDE12': 'kon',  // U+1F812
        '\uD83E\uDE13': 'kpen', // U+1F813
        '\uD83E\uDE14': 'kpun', // U+1F814
        '\uD83E\uDE15': 'kpon', // U+1F815
        '\uD83E\uDE16': 'kpi',  // U+1F816
        '\uD83E\uDE17': 'kpa',  // U+1F817
        '\uD83E\uDE18': 'kpu',  // U+1F818
        '\uD83E\uDE19': 'kpe',  // U+1F819
        '\uD83E\uDE1A': 'kpo',  // U+1F81A
        '\uD83E\uDE1B': 'kpin', // U+1F81B
        '\uD83E\uDE1C': 'kpan', // U+1F81C
        '\uD83E\uDE1D': 'wi',   // U+1F81D
        '\uD83E\uDE1E': 'wa',   // U+1F81E
        '\uD83E\uDE1F': 'wu',   // U+1F81F
        '\uD83E\uDE20': 'we',   // U+1F820
        '\uD83E\uDE21': 'wo',   // U+1F821
        '\uD83E\uDE22': 'win',  // U+1F822
        '\uD83E\uDE23': 'wan',  // U+1F823
        '\uD83E\uDE24': 'wen',  // U+1F824
        '\uD83E\uDE25': 'wun',  // U+1F825
        '\uD83E\uDE26': 'won',  // U+1F826
        '\uD83E\uDE27': 'bi',   // U+1F827
        '\uD83E\uDE28': 'ba',   // U+1F828
        // ... Continue this pattern for all Mende Kikakui characters from U+1F800 to U+1F8BF
        // using the phonetic values from the Unicode names (e.g., MENDE KIKAKUI SYLLABLE Mxxx YY -> 'yy')
        // This is a very long list. I'll put the rest of the known pattern.
        '\uD83E\uDE29': 'bu',   // U+1F829
        '\uD83E\uDE2A': 'be',   // U+1F82A
        '\uD83E\uDE2B': 'bo',   // U+1F82B
        '\uD83E\uDE2C': 'bin',  // U+1F82C
        '\uD83E\uDE2D': 'ban',  // U+1F82D
        '\uD83E\uDE2E': 'ben',  // U+1F82E
        '\uD83E\uDE2F': 'bun',  // U+1F82F
        '\uD83E\uDE30': 'bon',  // U+1F830
        '\uD83E\uDE31': 'mbi',  // U+1F831
        '\uD83E\uDE32': 'mba',  // U+1F832
        '\uD83E\uDE33': 'mbu',  // U+1F833
        '\uD83E\uDE34': 'mbe',  // U+1F834
        '\uD83E\uDE35': 'mbo',  // U+1F835
        '\uD83E\uDE36': 'mbin', // U+1F836
        '\uD83E\uDE37': 'mban', // U+1F837
        '\uD83E\uDE38': 'mben', // U+1F838
        '\uD83E\uDE39': 'mbun', // U+1F839
        '\uD83E\uDE3A': 'mbon', // U+1F83A
        '\uD83E\uDE3B': 'pi',   // U+1F83B
        '\uD83E\uDE3C': 'pa',   // U+1F83C
        '\uD83E\uDE3D': 'pu',   // U+1F83D
        '\uD83E\uDE3E': 'pe',   // U+1F83E
        '\uD83E\uDE3F': 'po',   // U+1F83F
        '\uD83E\uDE40': 'pin',  // U+1F840
        '\uD83E\uDE41': 'pan',  // U+1F841
        '\uD83E\uDE42': 'pen',  // U+1F842
        '\uD83E\uDE43': 'pun',  // U+1F843
        '\uD83E\uDE44': 'pon',  // U+1F844
        '\uD83E\uDE45': 'fi',   // U+1F845
        '\uD83E\uDE46': 'fa',   // U+1F846
        '\uD83E\uDE47': 'fu',   // U+1F847
        '\uD83E\uDE48': 'fe',   // U+1F848
        '\uD83E\uDE49': 'fo',   // U+1F849
        '\uD83E\uDE4A': 'fin',  // U+1F84A
        '\uD83E\uDE4B': 'fan',  // U+1F84B
        '\uD83E\uDE4C': 'fen',  // U+1F84C
        '\uD83E\uDE4D': 'fun',  // U+1F84D
        '\uD83E\uDE4E': 'fon',  // U+1F84E
        '\uD83E\uDE4F': 'vi',   // U+1F84F
        '\uD83E\uDE50': 'va',   // U+1F850
        '\uD83E\uDE51': 'vu',   // U+1F851
        '\uD83E\uDE52': 've',   // U+1F852
        '\uD83E\uDE53': 'vo',   // U+1F853
        '\uD83E\uDE54': 'vin',  // U+1F854
        '\uD83E\uDE55': 'van',  // U+1F855
        '\uD83E\uDE56': 'ven',  // U+1F856
        '\uD83E\uDE57': 'vun',  // U+1F857
        '\uD83E\uDE58': 'von',  // U+1F858
        '\uD83E\uDE59': 'ti',   // U+1F859
        '\uD83E\uDE5A': 'ta',   // U+1F85A
        '\uD83E\uDE5B': 'tu',   // U+1F85B
        '\uD83E\uDE5C': 'te',   // U+1F85C
        '\uD83E\uDE5D': 'to',   // U+1F85D
        '\uD83E\uDE5E': 'tin',  // U+1F85E
        '\uD83E\uDE5F': 'tan',  // U+1F85F
        '\uD83E\uDE60': 'ten',  // U+1F860
        '\uD83E\uDE61': 'tun',  // U+1F861
        '\uD83E\uDE62': 'ton',  // U+1F862
        '\uD83E\uDE63': 'ndi',  // U+1F863
        '\uD83E\uDE64': 'nda',  // U+1F864
        '\uD83E\uDE65': 'ndu',  // U+1F865
        '\uD83E\uDE66': 'nde',  // U+1F866
        '\uD83E\uDE67': 'ndo',  // U+1F867
        '\uD83E\uDE68': 'ndin', // U+1F868
        '\uD83E\uDE69': 'ndan', // U+1F869
        '\uD83E\uDE6A': 'nden', // U+1F86A
        '\uD83E\uDE6B': 'ndun', // U+1F86B
        '\uD83E\uDE6C': 'ndon', // U+1F86C
        '\uD83E\uDE6D': 'li',   // U+1F86D
        '\uD83E\uDE6E': 'la',   // U+1F86E
        '\uD83E\uDE6F': 'lu',   // U+1F86F
        '\uD83E\uDE70': 'le',   // U+1F870
        '\uD83E\uDE71': 'lo',   // U+1F871
        '\uD83E\uDE72': 'lin',  // U+1F872
        '\uD83E\uDE73': 'lan',  // U+1F873
        '\uD83E\uDE74': 'len',  // U+1F874
        '\uD83E\uDE75': 'lun',  // U+1F875
        '\uD83E\uDE76': 'lon',  // U+1F876
        '\uD83E\uDE77': 'si',   // U+1F877
        '\uD83E\uDE78': 'sa',   // U+1F878
        '\uD83E\uDE79': 'su',   // U+1F879
        '\uD83E\uDE7A': 'se',   // U+1F87A
        '\uD83E\uDE7B': 'so',   // U+1F87B
        '\uD83E\uDE7C': 'sin',  // U+1F87C
        '\uD83E\uDE7D': 'san',  // U+1F87D
        '\uD83E\uDE7E': 'sen',  // U+1F87E
        '\uD83E\uDE7F': 'sun',  // U+1F87F
        '\uD83E\uDE80': 'son',  // U+1F880
        '\uD83E\uDE81': 'thi',  // U+1F881
        '\uD83E\uDE82': 'tha',  // U+1F882
        '\uD83E\uDE83': 'thu',  // U+1F883
        '\uD83E\uDE84': 'the',  // U+1F884
        '\uD83E\uDE85': 'tho',  // U+1F885
        '\uD83E\uDE86': 'thin', // U+1F886
        '\uD83E\uDE87': 'than', // U+1F887
        '\uD83E\uDE88': 'then', // U+1F888
        '\uD83E\uDE89': 'thun', // U+1F889
        '\uD83E\uDE8A': 'thon', // U+1F88A
        '\uD83E\uDE8B': 'nyi',  // U+1F88B
        '\uD83E\uDE8C': 'nya',  // U+1F88C
        '\uD83E\uDE8D': 'nyu',  // U+1F88D
        '\uD83E\uDE8E': 'nye',  // U+1F88E
        '\uD83E\uDE8F': 'nyo',  // U+1F88F
        '\uD83E\uDE90': 'nyin', // U+1F890
        '\uD83E\uDE91': 'nyan', // U+1F891
        '\uD83E\uDE92': 'nyen', // U+1F892
        '\uD83E\uDE93': 'nyun', // U+1F893
        '\uD83E\uDE94': 'nyon', // U+1F894
        '\uD83E\uDE95': 'hi',   // U+1F895
        '\uD83E\uDE96': 'ha',   // U+1F896
        '\uD83E\uDE97': 'hu',   // U+1F897
        '\uD83E\uDE98': 'he',   // U+1F898
        '\uD83E\uDE99': 'ho',   // U+1F899
        '\uD83E\uDE9A': 'hin',  // U+1F89A
        '\uD83E\uDE9B': 'han',  // U+1F89B
        '\uD83E\uDE9C': 'hen',  // U+1F89C
        '\uD83E\uDE9D': 'hun',  // U+1F89D
        '\uD83E\uDE9E': 'hon',  // U+1F89E
        '\uD83E\uDE9F': 'nggi', // U+1F89F
        '\uD83E\uDEA0': 'ngga', // U+1F8A0
        '\uD83E\uDEA1': 'nggu', // U+1F8A1
        '\uD83E\uDEA2': 'ngge', // U+1F8A2
        '\uD83E\uDEA3': 'nggo', // U+1F8A3
        '\uD83E\uDEA4': 'nggin',// U+1F8A4
        '\uD83E\uDEA5': 'nggan',// U+1F8A5
        '\uD83E\uDEA6': 'nggen',// U+1F8A6
        '\uD83E\uDEA7': 'nggun',// U+1F8A7
        '\uD83E\uDEA8': 'nggon',// U+1F8A8
        '\uD83E\uDEA9': 'COMBINING_NASALIZATION_MARK', // U+1F8A9
        '\uD83E\uDEAA': 'COMBINING_HIGH_TONE_MARK',    // U+1F8AA
        '\uD83E\uDEAB': 'COMBINING_LOW_TONE_MARK',     // U+1F8AB
        '\uD83E\uDEAC': 'COMBINING_RISING_TONE_MARK',  // U+1F8AC
        '\uD83E\uDEAD': 'COMBINING_FALLING_TONE_MARK', // U+1F8AD
        '\uD83E\uDEAE': '.',    // U+1F8AE FULL STOP
        '\uD83E\uDEAF': ',',    // U+1F8AF COMMA
        '\uD83E\uDEB0': '0',    // U+1F8B0 DIGIT ZERO
        '\uD83E\uDEB1': '1',    // U+1F8B1
        '\uD83E\uDEB2': '2',    // U+1F8B2
        '\uD83E\uDEB3': '3',    // U+1F8B3
        '\uD83E\uDEB4': '4',    // U+1F8B4
        '\uD83E\uDEB5': '5',    // U+1F8B5
        '\uD83E\uDEB6': '6',    // U+1F8B6
        '\uD83E\uDEB7': '7',    // U+1F8B7
        '\uD83E\uDEB8': '8',    // U+1F8B8
        '\uD83E\uDEB9': '9',    // U+1F8B9
        '\uD83E\uDEBA': 'ee',   // U+1F8BA
        '\uD83E\uDEBB': 'oo',   // U+1F8BB
        '\uD83E\uDEBC': 'ei',   // U+1F8BC
        '\uD83E\uDEBD': 'ou',   // U+1F8BD
        '\uD83E\uDEBE': 'au',   // U+1F8BE
        '\uD83E\uDEBF': 'n'     // U+1F8BF Syllabic N
    }
};