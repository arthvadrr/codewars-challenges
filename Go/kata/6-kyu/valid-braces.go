package kata

func ValidBraces(str string) bool {
	var result bool = true
	var history []string = []string{}
	
	braces := map[string]int {
		"{": 0,
		"[": 0,
		"(": 0,
	}

	opps := map[string]string {
		"}": "{",
		"]": "[",
		")": "(",
	}
	
	incByKey := func(key string) {
		braces[key]++
	}

	decByKey := func(key string) {
		history = history[:len(history) - 1]
		braces[key]--
	}

	for i := 0; i < len(str); i++ {
		char := string(str[i])

		if char == "{" || char == "[" || char == "(" {
			history = append(history, char)
			incByKey(char)
		}

		if str[i] == '}' || str[i] == ']' || str[i] == ')' {
			if len(history) > 0 {
				var last string = history[len(history) - 1]
				if last != opps[char] {
					return false
				}
			} else {
				return false
			}

			decByKey(opps[char])
		}
	}

	if braces["{"] != 0 || braces["["] != 0 || braces["("] != 0 {
		result = false
	} 

	return result
}