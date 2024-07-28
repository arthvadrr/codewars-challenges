'''
Your task is determine the lowest number base system in which the input n ( base 10 ), expressed in this number base system, is all 1s in its digits.

See some examples:

7 in base 2 is 111 - fits! answer is 2

21 in base 2 is 10101 - contains 0, does not fit
21 in base 3 is 210 - contains 0 and 2, does not fit
21 in base 4 is 111 - contains only 1 it fits! answer is 4

n is always less than Number.MAX_SAFE_INTEGER or equivalent.
'''

# def get_min_base(number):
#     base = 2

#     def convert_to_base(number, base):
#         if number == 0: return [0]
#         num_arr = []
#         while number: 
#             num_arr.append(int(number % base))
#             number //= base
#         return num_arr

#     while True:
#         is_all_ones = True
#         current = convert_to_base(number, base)
#         for letter in current:
#             if letter != 1: is_all_ones = False

#         if is_all_ones: return base
#         base += 1

def _(n, b):
    while n % b == 1:
        if n == 1: return True
        n //= b
    return False

def get_min_base(n):
    for i in range(2, int(n ** 0.5) + 1):
        if _(n, i): return i
    return n - 1
import math
def _(number, base): var = lambda: math.log(number * (base - 1) + 1, base).is_integer()


def get_min_base(n):
    for i in range(2, int(n ** 0.5) + 2):
        if _(n, i): return i
    return n - 1

print(get_min_base(26))