'''
Build Tower

Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]

And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
'''

def get_row_length(number):
    return (number - 1) * 2 + 1

def tower_builder(n_floors):
    result = []
    row_length = get_row_length(n_floors)
    amount_of_stars = 1

    for i in range(n_floors):
        row = []
        center = ''

        for i in range(amount_of_stars):
            center += '*'

        row.append(center.center(row_length))

        result.append("".join(row))

        amount_of_stars += 2
    return result

print(tower_builder(5))