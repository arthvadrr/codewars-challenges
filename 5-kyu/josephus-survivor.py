'''
In this kata you have to correctly return who is the "survivor", ie: the last element of a Josephus permutation.

Basically you have to assume that n people are put into a circle and that they are eliminated in steps of k elements, like this:

josephus_survivor(7,3) => means 7 people in a circle;
one every 3 is eliminated until one remains
[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] => 3 is counted out
[1,2,4,5,7] => 6 is counted out
[1,4,5,7] => 2 is counted out
[1,4,5] => 7 is counted out
[1,4] => 5 is counted out
[4] => 1 counted out, 4 is the last element - the survivor!

The above link about the "base" kata description will give you a more thorough insight about the origin of this kind of permutation, but basically that's all that there is to know to solve this kata.

Notes and tips: using the solution to the other kata to check your function may be helpful, but as much larger numbers will be used, using an array/list to compute the number of the survivor may be too slow; you may assume that both n and k will always be >=1.
'''

import time
from collections import deque

def josephus_survivor(n,k):
    n_arr = deque([i for i in range(1, n + 1)])
    index = len(n_arr) - 1

    while len(n_arr) > 1:
        length = len(n_arr)

        if length >= k:
            index += k

            if index > length - 1:
                index = index - length
        else:
            for num in range(0, k):
                index += 1
                if index > length - 1: index = 0

        del n_arr[index]
        length -= 1

        if index > 0: 
            index -= 1
        elif index == 0:
            index = length - 1

    return n_arr[0]

first = time.time()
# INSERT HERE ⌄
print(josephus_survivor(7, 3)) #4
# INSERT HERE ^
last = time.time()
total = last - first
print(total)
print(josephus_survivor(4353,4731)) #10
print(josephus_survivor(7,3),4)
print(josephus_survivor(11,19),10)
print(josephus_survivor(1,300),1)
print(josephus_survivor(14,2),13)
print(josephus_survivor(100,1),100)