'''
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples

pig_it('Pig latin is cool') # igPay atinlay siay oolcay
pig_it('Hello world !')     # elloHay o
'''

def pig_it(text):
    print(text)
    words  = text.split(' ')
    result = []

    for word in words:
        letters = [*word]
        last_letter = letters[len(word) - 1]

        if not last_letter.isalpha():
            result.append(last_letter)
            break;

        first_letter = letters.pop(0) + 'ay'
        letters.append(first_letter)
        result.append("".join(letters))

    return " ".join(result)

print(pig_it('Pig latin is cool'))
print(pig_it('Pig latin is cool!'))
# igPay atinlay siay oolcay