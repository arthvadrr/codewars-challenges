'''
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
'''

def solution(string):
    result = []

    if len(string) % 2 != 0: string += '_'

    print(len(string))

    current_string = ''

    for i in range(len(string)):
        current_string += string[i]
        if i % 2 != 0:
            result.append(current_string) 
            current_string = ''
    return result

print(solution('hithere'))