package kata

func Parse(data string) []int {
	result := []int{}
	modyyy := 0

	parser := map[string]func(int) int{
		"i": func(x int) int {
			return x + 1
		},
		"d": func(x int) int {
			return x - 1
		},
		"s": func(x int) int {
			return x * x
		},
		"o": func(x int) int {
			result = append(result, x)
			return 0
		},
	}

	for _, fish := range data {
		_, keyexists := parser[string(fish)]

		if keyexists {
			if fish == 'o' {
				parser["o"](modyyy)
			} else {
				modyyy = parser[string(fish)](modyyy)
			}
		}
	}

	return result
}