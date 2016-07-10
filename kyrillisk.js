var russianMapping = {
    'А': 'A',
    'а': 'a',
    'Б': 'B',
    'б': 'b',
    'В': 'V',
    'в': 'v',
    'Г': 'G',
    'г': 'g',
    'Д': 'D',
    'д': 'd',
    'Е': 'E',
    'е': 'e',
    'Ё': 'Jo',
    'ё': 'jo',
    'Ж': 'Zj',
    'ж': 'zj',
    'З': 'Z',
    'з': 'z',
    'И': 'I',
    'и': 'i',
    'Й': 'J',
    'й': 'j',
    'К': 'K',
    'к': 'k',
    'Л': 'L',
    'л': 'l',
    'М': 'M',
    'м': 'm',
    'Н': 'N',
    'н': 'n',
    'О': 'O',
    'о': 'o',
    'П': 'P',
    'п': 'p',
    'Р': 'R',
    'р': 'r',
    'С': 'S',
    'с': 's',
    'Т': 'T',
    'т': 't',
    'У': 'U',
    'у': 'u',
    'Ф': 'F',
    'ф': 'f',
    'Х': 'Kh',
    'х': 'kh',
    'Ц': 'Ts',
    'ц': 'ts',
    'Ч': 'Tsj',
    'ч': 'tsj',
    'Ш': 'Sj',
    'ш': 'sj',
    'Щ': 'Sjtsj',
    'щ': 'sjtsj',
    'Ы': 'Y',
    'ы': 'y',
    'Ь': 'J',
    'ь': 'j',
    'Э': 'E',
    'э': 'e',
    'Ю': 'Ju',
    'ю': 'ju',
    'Я': 'Ja',
    'я': 'ja'
};

var isRussianCharacter = function(char) {
    if (char.charCodeAt(0) >= 1040 && char.charCodeAt(0) <= 1103) {
        return true;
    }
    if (char.charCodeAt(0) === 1025 || char.charCodeAt(0) === 1105) {
        return true;
    }
    return false;
};

var isCyrillicVowel = function(char) {
    return /[АаЭэЫыУуОоЯяЕеЁёЮюИи]/.test(char);
};

var isCyrillicConsonant = function(char) {
    return /[БбВвГгДдЖжЗзЙйКкЛлМмНнПпРрСсТтФфХхЦцЧчШшЩщ]/.test(char);
};

var isCheShaShcha = function(char) {
    return char === 'Ч' || char === 'ч' || char === 'Ш' || char === 'ш' || char === 'Щ' || char === 'щ';
};

var isEsZe = function(char) {
    return char === 'С' || char === 'с' || char === 'З' || char === 'з';
};

// Data and rules are from http://www.sprakradet.no/upload/Rettskriving%20og%20ordlister/russ.pdf
var transcribeFromRussian = function(cyrillicString) {
    var latinString = [];

    /* Do the 'plain' transformations first */
    var i;
    for (i = 0; i < cyrillicString.length; i++) {
        if (!isRussianCharacter(cyrillicString[i])) {
            latinString[i] = cyrillicString[i];
        } else {
            latinString[i] = russianMapping[cyrillicString[i]];
        }
    }

    /* Funky e/ë rules.  */
    for (i = 0; i < cyrillicString.length; i++) {
        /* 'e' → 'je' in beginning of syllable (Елена → Jelena) */
        if (cyrillicString[i - 1] === undefined || cyrillicString[i - 1] === ' ') {
            if (cyrillicString[i] === 'Е') {
                latinString[i] = 'Je';
            }
            if (cyrillicString[i] === 'е') {
                latinString[i] = 'je';
            }
        }

        /* 'e' → 'je' after vowel (Николаев → Nikolajev) */
        if (isCyrillicVowel(cyrillicString[i - 1]) && cyrillicString[i] === 'е') {
            latinString[i] = 'je';
        }

        /* 'ё' → 'o' after 'ч', 'ш' and 'щ'  */
        if (isCheShaShcha(cyrillicString[i - 1])) {
            if (cyrillicString[i] === 'ё') {
                latinString[i] = 'o';
            }
            if (cyrillicString[i] === 'Ё') {
                latinString[i] = 'O';
            }
        }

        /* 'ё' → 'io' after 'с' or 'з'  */
        /* 'ю' → 'iu' after 'с' or 'з' */
        /* 'я' → 'ia' after 'с' or 'з' */
        if (isEsZe(cyrillicString[i - 1])) {
            if (cyrillicString[i] === 'ё') {
                latinString[i] = 'io';
            }
            if (cyrillicString[i] === 'Ё') {
                latinString[i] = 'IO';
            }
            if (cyrillicString[i] === 'ю') {
                latinString[i] = 'iu';
            }
            if (cyrillicString[i] === 'Ю') {
                latinString[i] = 'Iu';
            }
            if (cyrillicString[i] === 'я') {
                latinString[i] = 'ia';
            }
            if (cyrillicString[i] === 'Я') {
                latinString[i] = 'Ia';
            }
        }
    }

    /* Fixing the 'ь' mess  */
    for (i = 0; i < cyrillicString.length; i++) {
        // Remove in end of words
        if (cyrillicString[i + 1] === undefined || cyrillicString[i + 1] === ' ') {
            if (cyrillicString[i] === 'Ь' || cyrillicString[i] === 'ь') {
                latinString[i] = '';
            }
        }

        // Remove between consonants
        if (isCyrillicConsonant(cyrillicString[i - 1]) && cyrillicString[i] === 'ь' && isCyrillicConsonant(cyrillicString[i + 1])) {
            latinString[i] = '';
        }

        // Change to 'i' between ('с' or 'з') and vowel
        if (isEsZe(cyrillicString[i - 1]) && cyrillicString[i] === 'ь' && isCyrillicVowel(cyrillicString[i + 1])) {
            latinString[i] = 'i';
        }
    }

    latinString = latinString.join('');
    /* Special rule: Do not allow two consecutive 'j' characters  */
    for (i = 0; i < latinString.length; i++) {
        if (latinString[i] === 'j') {
            if (latinString[i] === latinString[i + 1]) {
                latinString = latinString.slice(0, i) + latinString.slice(i + 1, latinString.length);
            }
        }
    }
    return latinString;
};

module.exports = {
    transcribeFromRussian: transcribeFromRussian
}