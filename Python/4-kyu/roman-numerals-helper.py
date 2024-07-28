"""
https://www.codewars.com/kata/51b66044bce5799a7f000003/train/python

Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API
demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping
any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008
is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Input range : 1 <= n < 4000

In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").
"""

roman_numerals = {
    "I": 1,
    "IV": 4,
    "V": 5,
    "IX": 9,
    "X": 10,
    "XL": 40,
    "L": 50,
    "XC": 90,
    "C": 100,
    "CD": 400,
    "D": 500,
    "CM": 900,
    "M": 1000
}


class RomanNumerals:
    def to_roman(val):
        result = ''
        for roman in dict(reversed(list(roman_numerals.items()))):
            num = roman_numerals[roman]
            while val >= roman_numerals[roman]:
                result += roman
                val -= num
        return result

    def from_roman(roman):
        result = 0
        to_be_subtracted = 0
        for i, numeral in enumerate(roman):
            next_numeral_value = False
            if i < len(roman) - 1:
                next_numeral_value = roman_numerals[roman[i + 1]]
            if next_numeral_value > roman_numerals[numeral]:
                to_be_subtracted += roman_numerals[numeral]
                continue
            result += roman_numerals[numeral] - to_be_subtracted
            to_be_subtracted = 0
        return result
