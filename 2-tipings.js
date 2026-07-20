"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var makeOrdinal = require("./makeOrdinal");
var isFinite = require("./isFinite");
var isSafeNumber = require("./isSafeNumber");
var NUMBERS;
(function (NUMBERS) {
    NUMBERS[NUMBERS["TEN"] = 10] = "TEN";
    NUMBERS[NUMBERS["ONE_HUNDRED"] = 100] = "ONE_HUNDRED";
    NUMBERS[NUMBERS["ONE_THOUSAND"] = 1000] = "ONE_THOUSAND";
    NUMBERS[NUMBERS["ONE_MILLION"] = 1000000] = "ONE_MILLION";
    NUMBERS[NUMBERS["ONE_BILLION"] = 1000000000] = "ONE_BILLION";
    NUMBERS[NUMBERS["ONE_TRILLION"] = 1000000000000] = "ONE_TRILLION";
    NUMBERS[NUMBERS["ONE_QUADRILLION"] = 1000000000000000] = "ONE_QUADRILLION";
    NUMBERS[NUMBERS["MAX"] = 9007199254740992] = "MAX";
})(NUMBERS || (NUMBERS = {}));
var LESS_THAN_TWENTY;
(function (LESS_THAN_TWENTY) {
    LESS_THAN_TWENTY["zero"] = "zero";
    LESS_THAN_TWENTY["one"] = "one";
    LESS_THAN_TWENTY["two"] = "two";
    LESS_THAN_TWENTY["three"] = "three";
    LESS_THAN_TWENTY["four"] = "four";
    LESS_THAN_TWENTY["five"] = "five";
    LESS_THAN_TWENTY["six"] = "six";
    LESS_THAN_TWENTY["seven"] = "seven";
    LESS_THAN_TWENTY["eight"] = "eight";
    LESS_THAN_TWENTY["nine"] = "nine";
    LESS_THAN_TWENTY["ten"] = "ten";
    LESS_THAN_TWENTY["eleven"] = "eleven";
    LESS_THAN_TWENTY["twelve"] = "twelve";
    LESS_THAN_TWENTY["thirteen"] = "thirteen";
    LESS_THAN_TWENTY["fourteen"] = "fourteen";
    LESS_THAN_TWENTY["fifteen"] = "fifteen";
    LESS_THAN_TWENTY["sixteen"] = "sixteen";
    LESS_THAN_TWENTY["seventeen"] = "seventeen";
    LESS_THAN_TWENTY["eighteen"] = "eighteen";
    LESS_THAN_TWENTY["nineteen"] = "nineteen";
})(LESS_THAN_TWENTY || (LESS_THAN_TWENTY = {}));
var TENTHS_LESS_THAN_HUNDRED;
(function (TENTHS_LESS_THAN_HUNDRED) {
    TENTHS_LESS_THAN_HUNDRED["zero"] = "zero";
    TENTHS_LESS_THAN_HUNDRED["ten"] = "ten";
    TENTHS_LESS_THAN_HUNDRED["twenty"] = "twenty";
    TENTHS_LESS_THAN_HUNDRED["thirty"] = "thirty";
    TENTHS_LESS_THAN_HUNDRED["forty"] = "forty";
    TENTHS_LESS_THAN_HUNDRED["fifty"] = "fifty";
    TENTHS_LESS_THAN_HUNDRED["sixty"] = "sixty";
    TENTHS_LESS_THAN_HUNDRED["seventy"] = "seventy";
    TENTHS_LESS_THAN_HUNDRED["eighty"] = "eighty";
    TENTHS_LESS_THAN_HUNDRED["ninety"] = "ninety";
})(TENTHS_LESS_THAN_HUNDRED || (TENTHS_LESS_THAN_HUNDRED = {}));
/**
 * Converts an integer into words.
 * If number is decimal, the decimals will be removed.
 * @example toWords(12) => 'twelve'
 * @param {number|string} number
 * @param {boolean} [asOrdinal] - Deprecated, use toWordsOrdinal() instead!
 * @returns {string}
 */
function toWords(number, asOrdinal) {
    var words;
    var num = parseInt(number, 10);
    if (!isFinite(num)) {
        throw new TypeError('Not a finite number: ' + number + ' (' + typeof number + ')');
    }
    if (!isSafeNumber(num)) {
        throw new RangeError('Input is not a safe number, it’s either too large or too small.');
    }
    words = generateWords(num);
    return asOrdinal ? makeOrdinal(words) : words;
}
function generateWords(number) {
    var remainder, word, words = arguments[1];
    // We’re done
    if (number === 0) {
        return !words ? 'zero' : words.join(' ').replace(/,$/, '');
    }
    // First run
    if (!words) {
        words = [];
    }
    // If negative, prepend “minus”
    if (number < 0) {
        words.push('minus');
        number = Math.abs(number);
    }
    if (number < 20) {
        remainder = 0;
        word = LESS_THAN_TWENTY[number];
    }
    else if (number < ONE_HUNDRED) {
        remainder = number % TEN;
        word = TENTHS_LESS_THAN_HUNDRED[Math.floor(number / TEN)];
        // In case of remainder, we need to handle it here to be able to add the “-”
        if (remainder) {
            word += '-' + LESS_THAN_TWENTY[remainder];
            remainder = 0;
        }
    }
    else if (number < ONE_THOUSAND) {
        remainder = number % ONE_HUNDRED;
        word = generateWords(Math.floor(number / ONE_HUNDRED)) + ' hundred';
    }
    else if (number < ONE_MILLION) {
        remainder = number % ONE_THOUSAND;
        word = generateWords(Math.floor(number / ONE_THOUSAND)) + ' thousand,';
    }
    else if (number < ONE_BILLION) {
        remainder = number % ONE_MILLION;
        word = generateWords(Math.floor(number / ONE_MILLION)) + ' million,';
    }
    else if (number < ONE_TRILLION) {
        remainder = number % ONE_BILLION;
        word = generateWords(Math.floor(number / ONE_BILLION)) + ' billion,';
    }
    else if (number < ONE_QUADRILLION) {
        remainder = number % ONE_TRILLION;
        word = generateWords(Math.floor(number / ONE_TRILLION)) + ' trillion,';
    }
    else if (number <= MAX) {
        remainder = number % ONE_QUADRILLION;
        word = generateWords(Math.floor(number / ONE_QUADRILLION)) +
            ' quadrillion,';
    }
    words.push(word);
    return generateWords(remainder, words);
}
module.exports = toWords;
//# sourceMappingURL=2-tipings.js.map