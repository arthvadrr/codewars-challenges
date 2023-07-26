!https://www.codewars.com/kata/566fc12495810954b1000030

!Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

!Square all numbers k (0 <= k <= n) between 0 and n.

!Count the numbers of digits d used in the writing of all the k**2.

!Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.
!Examples:

!n = 10, d = 1 
!the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
!We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

!nb_dig(25, 1) returns 11 since
!the k*k that contain the digit 1 are:
!1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
!So there are 11 digits 1 for the squares of numbers between 0 and 25.

!Note that 121 has twice the digit 1.

MODULE Solution
  IMPLICIT NONE
  
CONTAINS

  INTEGER FUNCTION nb_dig(int, digit) RESULT(res)
    INTEGER :: int, digit, iterator, square, count, mod
    
    IF (0 == digit) THEN
      count = 1
    ELSE
      count = 0
    END IF
    
    DO iterator = 0, int
      square = iterator**2
      
      DO WHILE (square /= 0)
        mod = MODULO(square, 10)
        
        IF (mod == digit) THEN
          count = count + 1
        END IF
  
        square = square / 10
      END DO
    END DO
    
  res = count  
  END FUNCTION nb_dig

END MODULE Solution