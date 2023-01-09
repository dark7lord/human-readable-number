const getStrNums = () => {
    const singleNums = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    };

    const tensNums = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    };
    
    const decimalNums = {
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    };

    return {
        ...singleNums,
        ...tensNums,
        ...decimalNums
    };
}

function toReadable(number) {
    const hundred = ((number % 1000) / 100) | 0;
    const decimal = ((number % 100) / 10) | 0;
    const single = (number % 10) | 0;
    const strNums = getStrNums();
    const result = [];

    if ((number | 0) === 0) {
        return 'zero';
    }

    if (hundred !== 0) {
        result.push(strNums[hundred], 'hundred');
    }

    if (decimal !== 0 && decimal < 2) {
        result.push(strNums[(decimal * 10) + single]);
    }

    if (decimal !== 0 && decimal >= 2) {
        result.push(strNums[decimal * 10]);

        if (single !== 0) {
            result.push(strNums[single]);
        }
    }

    if (decimal === 0 && single !== 0) {
        result.push(strNums[single]);
    }

    return result.join(' ');
}

module.exports = toReadable;
