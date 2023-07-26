/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

using System;
using System.Linq;

public static class Kata
{
    public static int GetVowelCount(string str)
    {
        int vowelCount = 0;
        string[] word = str.split('');
        string[] vowels = ['a', 'e', 'i', 'o', 'u'];

        foreach (letter in word)
        {
          foreach(vowel in vowels)
          {
            if (vowel === letter) vowelCount++;
          }
        }

        return vowelCount;
    }
}

