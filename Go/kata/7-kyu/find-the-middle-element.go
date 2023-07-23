/*
https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/go
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).
*/

package kata

import "sort"

func Gimme(nums [3]int) int {
	var array [3]int
	copy(array[:], nums[:])
	sort.Ints(array[:])
	middle := 0

	if array[1] > array[0] && array[1] < array[2] {
		middle = array[1]

		for i := 0; i < len(nums); i++ {
			if middle == nums[i] {
				return i
			}
		}
	}

	return middle
}