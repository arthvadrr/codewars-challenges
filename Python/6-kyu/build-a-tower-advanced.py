'''
Build Tower Advanced

Build Tower by the following given arguments:

    number of floors (integer and always greater than 0)
    block size (width, height) (integer pair and always greater than (0, 0))

Tower block unit is represented as *. Tower blocks of block size (2, 1) and (2, 3) would look like respectively:

  **

  **
  **
  **

for example, a tower of 3 floors with block size = (2, 3) looks like below

[
  '    **    ',
  '    **    ',
  '    **    ',
  '  ******  ',
  '  ******  ',
  '  ******  ',
  '**********',
  '**********',
  '**********'
]

and a tower of 6 floors with block size = (2, 1) looks like below

[
  '          **          ', 
  '        ******        ', 
  '      **********      ', 
  '    **************    ', 
  '  ******************  ', 
  '**********************'
]

Don't return a whole string containing line-endings but a list/array/vector of strings instead!

This kata might looks like a 5.5kyu one. So challenge yourself!

Go take a look at Build Tower which is a more basic version :)
'''

def tower_builder(n_floors, block_size):
    width, height = block_size
    result = []
    row_length = width
    amount_of_stars = width

    for i in range(n_floors - 1):
        row_length += (width * 2)

    for i in range(n_floors):
        if i != 0: amount_of_stars = (amount_of_stars + (width * 2))

        for i in range(height):
            row = ''
            stars = '*'*amount_of_stars
            row += stars.center(row_length)
            result.append(row)
    return result

        
print(tower_builder(3, (2, 3)))