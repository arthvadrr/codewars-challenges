package main

import (
	"fmt"
	kata "kata/kata/6-kyu"
)

func main () {
	fmt.Println(kata.ValidBraces("()"))
	fmt.Println("--------------------")
	fmt.Println(kata.ValidBraces("{}()[]"))
	fmt.Println("--------------------")
	fmt.Println(kata.ValidBraces("{}([])"))
	fmt.Println("--------------------")
}