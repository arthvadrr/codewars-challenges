/*
https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/go

In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
*/

package kata

func NbYear(
  population int, 
  percentChange float64, 
  populationChange int, 
  targetPopulation int) int {
    currentPopulation := population
    increasing := true
    result := 0

    if targetPopulation < population {
      increasing = false
    }

    percentMod := func(num float64, per float64) float64 {
      percentage := per / 100
      result := num + (percentage * num)

      return result
    }

    incYear := func(pop int) int {
      pop = int(percentMod(float64(pop), percentChange))
      pop += populationChange

      return pop
    }

    for {
      nextPopulation := incYear(currentPopulation)

      if increasing {
        if currentPopulation >= targetPopulation {
          break
        }
      } else {
        if currentPopulation <= targetPopulation {
          break
        }
      }

      currentPopulation = nextPopulation
      result += 1
    }

    return result
}