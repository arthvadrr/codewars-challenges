'''
In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).

The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.

Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)

All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.

The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).

Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] and [1, 2, 2, 2, 2] do not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} (or equivalent in other languages)

Have fun!
'''

def pick_peaks(mountain_range):

    result = {
        "pos": [],
        "peaks": []
    }

    for index, mountain in enumerate(mountain_range):
        if index <= len(mountain_range) - 2 and index > 0:
            next_mountain = mountain_range[index + 1]
            next_index    = index

            while (next_mountain == mountain and next_index < len(mountain_range) - 1):
                next_index += 1
                next_mountain = mountain_range[next_index]

            if mountain_range[index - 1] < mountain and mountain > next_mountain:
                result["pos"].append(index)
                result["peaks"].append(mountain)
    
    return result



stuff = {
    "x": lambda num: num + 1
}

print(stuff["x"](4))

input_list = [1, 2, 3, 4, 4, 5, 6, 7, 7]
  
  
list_using_comp = [foo *10 for foo in input_list if foo % 2 == 0]

list_using_comp_2 = [foo *10 for foo in input_list if foo % 2 == 0]

list_using_comp_3 = [foo *10 for foo in input_list if foo % 3 == 0]
print("Output List using list comprehensions:", list_using_comp_3)

print(pick_peaks([-5, 11, 16, 16, -2, 8, 7, 0, 15, 13, 17, 13]))