// js/maps/ethiopic_map.js
window.ALL_SCRIPT_DATA = window.ALL_SCRIPT_DATA || {};

window.ALL_SCRIPT_DATA["ethiopic"] = {
    description: "Ethiopic (Ge'ez Fidel - Amharic/Tigrinya focus)",
    unicode_range: ['1200', '137F'],
    to_latin_map: {
        // Ha family
        '\u1200': 'hä', '\u1201': 'hu', '\u1202': 'hi', '\u1203': 'ha', '\u1204': 'he', '\u1205': 'hə', '\u1206': 'ho',
        // Lä family
        '\u1208': 'lä', '\u1209': 'lu', '\u120A': 'li', '\u120B': 'la', '\u120C': 'le', '\u120D': 'lə', '\u120E': 'lo',
        // Hha family
        '\u1210': 'ḥä', '\u1211': 'ḥu', '\u1212': 'ḥi', '\u1213': 'ḥa', '\u1214': 'ḥe', '\u1215': 'ḥə', '\u1216': 'ḥo',
        // Mä family
        '\u1218': 'mä', '\u1219': 'mu', '\u121A': 'mi', '\u121B': 'ma', '\u121C': 'me', '\u121D': 'mə', '\u121E': 'mo',
        // Sä family
        '\u1220': 'sä', '\u1221': 'su', '\u1222': 'si', '\u1223': 'sa', '\u1224': 'se', '\u1225': 'sə', '\u1226': 'so',
        // Rä family
        '\u1228': 'rä', '\u1229': 'ru', '\u122A': 'ri', '\u122B': 'ra', '\u122C': 're', '\u122D': 'rə', '\u122E': 'ro',
        // Ša family
        '\u1230': 'šä', '\u1231': 'šu', '\u1232': 'ši', '\u1233': 'ša', '\u1234': 'še', '\u1235': 'šə', '\u1236': 'šo',
        // Qa family
        '\u1240': 'qä', '\u1241': 'qu', '\u1242': 'qi', '\u1243': 'qa', '\u1244': 'qe', '\u1245': 'qə', '\u1246': 'qo',
        // Ba family
        '\u1260': 'bä', '\u1261': 'bu', '\u1262': 'bi', '\u1263': 'ba', '\u1264': 'be', '\u1265': 'bə', '\u1266': 'bo',
        // Ta family
        '\u1270': 'tä', '\u1271': 'tu', '\u1272': 'ti', '\u1273': 'ta', '\u1274': 'te', '\u1275': 'tə', '\u1276': 'to',
        // Pa family
        '\u1350': 'pä', '\u1351': 'pu', '\u1352': 'pi', '\u1353': 'pa', '\u1354': 'pe', '\u1355': 'pə', '\u1356': 'po',
        // Numerals and punctuation
        '\u1361': ' ',    // Wordspace
        '\u1362': '.',    // Full Stop
        '\u1363': ':',    // Colon
        '\u1369': '1', '\u136A': '2', '\u136B': '3', '\u136C': '4', '\u136D': '5', '\u136E': '6', '\u136F': '7', '\u1370': '8', '\u1371': '9',
        // Supplement (Syllables for Sebatbeit, etc.)
        '\u1380': 'vä', '\u1381': 'vu', '\u1382': 'vi', '\u1383': 'va', '\u1384': 've', '\u1385': 'və', '\u1386': 'vo'
        // Fa family
        ,'\u1348': 'fä', '\u1349': 'fu', '\u134A': 'fi', '\u134B': 'fa', '\u134C': 'fe', '\u134D': 'fə', '\u134E': 'fo'
        // Na family
        ,'\u1290': 'nä', '\u1291': 'nu', '\u1292': 'ni', '\u1293': 'na', '\u1294': 'ne', '\u1295': 'nə', '\u1296': 'no'
        // Ka family
        ,'\u12A8': 'kä', '\u12A9': 'ku', '\u12AA': 'ki', '\u12AB': 'ka', '\u12AC': 'ke', '\u12AD': 'kə', '\u12AE': 'ko'
        // Wa family
        ,'\u12C8': 'wä', '\u12C9': 'wu', '\u12CA': 'wi', '\u12CB': 'wa', '\u12CC': 'we', '\u12CD': 'wə', '\u12CE': 'wo'
        // Xa family
        ,'\u1238': 'xä', '\u1239': 'xu', '\u123A': 'xi', '\u123B': 'xa', '\u123C': 'xe', '\u123D': 'xə', '\u123E': 'xo'
        // Za family
        ,'\u12D8': 'zä', '\u12D9': 'zu', '\u12DA': 'zi', '\u12DB': 'za', '\u12DC': 'ze', '\u12DD': 'zə', '\u12DE': 'zo'
        // Ya family
        ,'\u12E8': 'yä', '\u12E9': 'yu', '\u12EA': 'yi', '\u12EB': 'ya', '\u12EC': 'ye', '\u12ED': 'yə', '\u12EE': 'yo'
        // Da family
        ,'\u12F0': 'dä', '\u12F1': 'du', '\u12F2': 'di', '\u12F3': 'da', '\u12F4': 'de', '\u12F5': 'də', '\u12F6': 'do'
        // Ga family
        ,'\u1308': 'gä', '\u1309': 'gu', '\u130A': 'gi', '\u130B': 'ga', '\u130C': 'ge', '\u130D': 'gə', '\u130E': 'go'
        // Tha family
        ,'\u1320': 'ṯä', '\u1321': 'ṯu', '\u1322': 'ṯi', '\u1323': 'ṯa', '\u1324': 'ṯe', '\u1325': 'ṯə', '\u1326': 'ṯo'
        // Cha family
        ,'\u1328': 'čä', '\u1329': 'ču', '\u132A': 'či', '\u132B': 'ča', '\u132C': 'če', '\u132D': 'čə', '\u132E': 'čo'
        // Ma family (duplicate for completeness)
        ,'\u1218': 'mä', '\u1219': 'mu', '\u121A': 'mi', '\u121B': 'ma', '\u121C': 'me', '\u121D': 'mə', '\u121E': 'mo'
        // La family (duplicate for completeness)
        ,'\u1208': 'lä', '\u1209': 'lu', '\u120A': 'li', '\u120B': 'la', '\u120C': 'le', '\u120D': 'lə', '\u120E': 'lo'
    }
};