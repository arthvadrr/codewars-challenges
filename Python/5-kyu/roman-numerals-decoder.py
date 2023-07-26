'''
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:

solution('XXI') # should return 21

Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
'''

def solution(roman):
    result = 0
    to_be_subtracted = 0

    roman_numerals = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    for i, numeral in enumerate(roman):
        next_numeral_value = False

        if i < len(roman) - 1:
            next_numeral_value = roman_numerals[roman[i + 1]]

        if  next_numeral_value > roman_numerals[numeral]:
            to_be_subtracted += roman_numerals[numeral]
            continue

        result += roman_numerals[numeral] - to_be_subtracted
        to_be_subtracted = 0
    return result

print(solution('MDCLXVI'))