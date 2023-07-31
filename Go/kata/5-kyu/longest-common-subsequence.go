/*
https://www.codewars.com/kata/52756e5ad454534f220001ef/train/go

Write a function called LCS that accepts two sequences and returns the longest subsequence common to the passed in sequences.
Subsequence

A subsequence is different from a substring. The terms of a subsequence need not be consecutive terms of the original sequence.
Example subsequence

Subsequences of "abc" = "a", "b", "c", "ab", "ac", "bc" and "abc".
LCS examples
*/

package kata

import "strings"

// LCS returns the longest subsequence common to s1 and s2
func LCS(s1, s2 string) string {
	result := ""

	for i := 0; i < len(s2); i++ {
		char := string(s2[i])

		if strings.Contains(s1, char) {
			if !strings.Contains(result, char) {
				result += char
			}
		}
	}

	return result
}