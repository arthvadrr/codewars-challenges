def solution(s):
  result = []
  for letter in s:
      if letter.isupper():
          result.append(' ')
      result.append(letter)
  return "".join(result)

print(solution('helloWorld'))