/*
https://www.codewars.com/kata/556e0fccc392c527f20000c5/train/go

If you have completed the Tribonacci sequence kata, you would know by now that mister Fibonacci has at least a bigger brother. If not, give it a quick look to get how things work.

Well, time to expand the family a little more: think of a Quadribonacci starting with a signature of 4 elements and each following element is the sum of the 4 previous, a Pentabonacci (well Cinquebonacci would probably sound a bit more italian, but it would also sound really awful) with a signature of 5 elements and each following element is the sum of the 5 previous, and so on.

Well, guess what? You have to build a Xbonacci function that takes a signature of X elements - and remember each next element is the sum of the last X elements - and returns the first n elements of the so seeded sequence.
*/
package kata

func AddNums(nums []int64) int64 {
	var result int64 = 0

	for i := 0; i < len(nums); i++ {
		result += nums[i]
	}

	return result
}

func Xbonacci(signature []int64, n int) []int64 {
	var result []int64 = signature
	end := len(signature)

	if end > n {
		end = n
		result = result[0:n]
	}

	start := 0

	for i := 0; i < n - len(signature); i++ {
		chunk := result[start:end]
		result = append(result, AddNums(chunk))
		start++
		end++
	} 

	return result
}
