/*
https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/go
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
*/

package kata

func FindNextSquare(sq int64) int64 {
	square := func(num int64) int64 {
		return num * num
	}

	root := func(num int64) int64 {
		for i := int64(1); i < num; i++ {
			if i * i == num {
				return i
			}
		}

		return -1
	}

	sqroot := root(sq)

	if sqroot == -1 {
		return sqroot
	}

	sqroot += 1

	return square(sqroot)
}