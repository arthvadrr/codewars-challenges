package kata

func MultiplicationTable(size int) [][]int {
  var result [][]int
  mod := 1
  
  createRow := func() []int {
    row := []int{}
    
    for i := 0; i < size; i++ {
      row = append(row, (i + 1) * mod)
    }
    
    return row
  }
  
  for i := 0; i < size; i++ {
    result = append(result, createRow())
    mod++
  }
  
  return result
}