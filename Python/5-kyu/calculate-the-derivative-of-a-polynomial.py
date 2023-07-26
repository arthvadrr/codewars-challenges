'''
Complete the function that calculates the derivative of a polynomial. A polynomial is an expression like: 3x4−2x2+x−10 3x^4 - 2x^2 + x - 10 3x4−2x2+x−10
How to calculate the derivative:

    Take the exponent and multiply it with the coefficient
    Reduce the exponent by 1

For example, derivative of 3x4 3x^4 3x4 is (4⋅3)x4−1=12x3 (4\cdot3)x^{4-1} = 12x^3 (4⋅3)x4−1=12x3
Good to know:

    The derivative of a constant is 0.
    Anything to the 0th exponent equals 1 (e.g. x0=1 x^0 = 1 x0=1).
    The derivative of the sum of two function is the sum of the derivatives.

Notes:

    The exponentiation is marked with ^
    Exponents are always integers and >= 0
    Exponents are written only if > 1
    There are no spaces around the operators
    Leading + signs are omitted
'''
import re

def apply_power_rule(term):
    if term == '0': return '0'
    co_regexp = r'-(?<=-)[0-9]+(?=x)|[0-9]+(?=x)'
    ex_regexp = r'(?<=\^)[0-9]+'
    coefficient = re.findall(co_regexp, term)
    exponent    = re.findall(ex_regexp, term)

    print('ex', exponent)

    if len(coefficient) == 0:
        for i in range(len(term)):
            if term[i] == 'x':
                if i == 0: 
                    coefficient = 1
                    break
                if term[i - 1] == '-':
                    coefficient = -1
    else:
        coefficient = int(coefficient[0])


    if len(exponent) == 1: 
        exponent = int(exponent[0])
        new_exponent = exponent - 1
        new_coefficient = exponent * coefficient
        if new_exponent == 0: return f'1'
        if new_exponent == 1: return f'{new_coefficient}x'
        return f'{new_coefficient}x^{new_exponent}'

    if f'{coefficient}x' == '0x': return '0x'

    return f'{coefficient}'

def derivative(eq):
    eq = eq.replace('-', '+-')
    expression = eq.split('+')

    for i in range(len(expression)):
        if not 'x' in expression[i]: expression[i] = '0'
        expression[i] = apply_power_rule(expression[i])

    new_list = []

    for i in range(len(expression)): 
        print('exp', expression[i])
        if expression[i] != '0': new_list.append(expression[i])
        if expression[i] == '0x': new_list.append('0')

    new_list = '+'.join(new_list)
    new_list = new_list.replace('+-', '-')

    return new_list or '0'

# print(derivative("-100"), "exp 0")
# print(derivative("4x+1"), "exp4")
# print(derivative("-x^2+3x+4"), "exp-2x+3")
# print(derivative("48x^11+88x^10-23"), "528x^10+880x^9")
# print(derivative('-x^5-x^4-x^3'), '-5x^4-4x^3-3x^2')
# print(derivative('-74x^11-53x'), '-814x^10-53')

print(derivative('-16x^11+78x^10+33x^7+0x'), '-176x^10+780x^9+231x^6+0')