/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/
package kata

import "strings"

func Disemvowel(comment string) string {
	result := ""
	commentArr := strings.Split(comment, "")

	HasVowel := func(char string) bool {
		vowels := []string{"a", "e", "i", "o", "u", "A", "E", "I", "O", "U"}
	
		for i := 0; i < len(vowels); i++ {
			if vowels[i] == char {
				return true;
			}
		}
	
		return false
	}

	for i := 0; i < len(commentArr); i++ {
		if !HasVowel(commentArr[i]) {
			result += commentArr[i]
		}
	}

	return result
}