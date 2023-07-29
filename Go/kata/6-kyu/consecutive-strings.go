/*
https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/go

You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
*/

package kata

import (
	"fmt"
	"strings"
)

func LongestConsec(strarr []string, k int) string {
	result := ""
	start := 0
	end := k
	longestLen := 0

	for i := k - 1; i < len(strarr); i++ {
		chunk := strarr[start:end]
		joined := strings.Join(chunk, "")
		fmt.Println(joined)
		currentLen := len(joined)

		if currentLen > longestLen {
			longestLen = currentLen
			result = joined
		}

		start++
		end++
	}

    return result
}

