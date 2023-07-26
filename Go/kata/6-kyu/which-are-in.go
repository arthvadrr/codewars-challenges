/*
https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/go

Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
*/

package kata

import (
	"sort"
	"strings"
)

func InArray(array1 []string, array2 []string) []string {
	var result []string = []string{} 

	if len(array1) > 0 && len(array2) > 0 {
		for len(array1) > 0 {
			substr := array1[0]
			array1 = array1[1:]
			exists := false

			for i := 0; i < len(result); i++ {
				if result[i] == substr {
					exists = true
					break
				}
			}

			if exists {
				continue
			}

			for i := 0; i < len(array2); i++ {
				if strings.Contains(array2[i], substr) {
					result = append(result, substr)
					break
				}
			}
		}

		sort.Strings(result)
	}

	return result
}