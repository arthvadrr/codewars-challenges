/*
https://www.codewars.com/kata/5b180e9fedaa564a7000009a/go

In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

    make as few changes as possible.
    if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

*/

package kata

import "strings"

func Solve(str string) string {
	result := ""
	changeUppers := true
	var lowers int
	var uppers int

	for i := 0; i < len(str); i++ {
		char := string(str[i])

		if strings.ToLower(char) == char {
			lowers++
		} else {
			uppers++
		}
	}

	if lowers < uppers {
		changeUppers = false
	}

	for i := 0; i < len(str); i++ {
		var char string

		if (changeUppers) {
			char = strings.ToLower(string(str[i]))
		} else {
			char = strings.ToUpper(string(str[i]))
		}

		result += char
	}

	return result
}