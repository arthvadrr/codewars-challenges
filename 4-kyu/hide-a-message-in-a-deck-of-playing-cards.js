/*
https://www.codewars.com/kata/59b9a92a6236547247000110/train/javascript

As a secret agent, you need a method to transmit a message to another secret agent. But an encrypted text written on a notebook will be suspicious if you get caught. A simple deck of playing cards, however, is everything but suspicious...

With a deck of 52 playing cards, there are 52! different possible permutations to order it. And 52! is equal to 80658175170943878571660636856403766975289505440883277824000000000000. That's a number with 68 digits!

There are so many different possible permutations, we can affirm that if you shuffle the cards well and put them back together to form a deck, you are the first one in history to get this particular order. The number of possible permutations in a deck of cards is higher than the estimated number of atoms in planet Earth (which is a number with about 50 digits).

With a way to associate a permutation of the cards to a sequence of characters, we can hide a message in the deck by ordering it correctly.
Correspondence between message and permutation
Message

To compose our message, we will use an alphabet containing 27 characters: the space and the letters from A to Z. We give them the following values:

" " = 0, A = 1, B = 2, ..., Z = 26

We now have a numeral system with a base equal to 27. We can compute a numeric value corresponding to any message:

"A " = 27 "AA" = 28 "AB" = 29 "ABC" = 786 etc.
Permutation 

Now we need a way to attribute a unique number to each of the possible permutations of our deck of playing cards.

There are few methods to enumerate permutations and assign a number to each of them, we will use the lexicographical order. With three cards, A, B, and C, as an example, it gives:

ABC = 0 ACB = 1 BAC = 2 BCA = 3 CAB = 4 CBA = 5

So the first arrangement is ABC, and the last one is CBA. With our 52 playing cards – ranks sorted from the Ace to the King, and suits in alphabetical order (Clubs, Diamonds, Hearts, Spades) – the first arrangement (number 0) is:
Ace of Clubs to King of Clubs, then Ace of Diamonds to King of Diamonds, then Ace of Hearts to King of Hearts, then Ace of Spades to King of Spades.

and the last one (number 52 - 1) is:
King of Spades to Ace of Spades, then King of Hearts to Ace of Hearts, then King of Diamonds to Ace of Diamonds, then King of Clubs to Ace of Clubs.

To transmit a message, we will compute the permutation for which the unique number is the numeric value of the message.
Your task

Write two functions:

const encode = (message) => {

Which takes a message (as a string) as argument and returns a deck of playing cards (an array of strings) ordered to hide the message.

const decode = (deck) => {

Which takes a deck of playing cards (as an array of strings) as argument and returns the message (as a string) hidden inside.

Passed data will always be valid, you don't have to check it.

Each card name, in a deck, is written with a two characters String: the rank followed by the suit. So the first arrangement of the deck is represented like:

AC 2C 3C 4C 5C 6C 7C 8C 9C TC JC QC KC for the Clubs AD 2D 3D 4D 5D 6D 7D 8D 9D TD JD QD KD for the Diamonds AH 2H 3H 4H 5H 6H 7H 8H 9H TH JH QH KH for the Hearts AS 2S 3S 4S 5S 6S 7S 8S 9S TS JS QS KS for the Spades

A preloaded function allows to easily print a deck to the console:

printDeck(deck, unicode);

The first argument is the deck to print, the second one is a boolean value allowing the selection of the character set: regular or Unicode (for which a font containing the playing cards characters needs to be installed on your system).
Examples
Encoding

encode("ATTACK TONIGHT ON CODEWARS");

should return this array of 52 strings:
[
  "A", "T", "T", "A", "C", "K", "", "T", "O", "N", "I", "G", "H",
  "T", "", "O", "N"
]
[
    "AC", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "TC", "JC", "QC", "KC",
    "AD", "2D", "3D", "4D", "5D", "6D", "JD", "9D", "7S", "9S", "QD", "5S", "TH",
    "7D", "TS", "QS", "2H", "JS", "6H", "3S", "6S", "TD", "8S", "2S", "8H", "7H",
    "4S", "4H", "3H", "5H", "AS", "KH", "QH", "9H", "KD", "KS", "JH", "8D", "AH"
];

Decoding

decode([
    "AC", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "TC", "JC", "QC", "KC",
    "AD", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "TD", "JD", "QD", "KD",
    "AH", "2H", "3H", "4H", "8H", "9S", "3S", "2S", "8S", "TS", "QS", "9H", "7H",
    "KH", "AS", "JH", "4S", "KS", "JS", "5S", "TH", "7S", "6S", "5H", "QH", "6H"
]);

should return the string:

"ATTACK APPROVED";

Have fun!

I hope you will enjoy this kata! Feedbacks and translations are very welcome.
Further readings
Logarithm

With the logarithm function, we can know how many digits, in a numeral system of a certain base, are needed to represent a number. For example, log2(52!) = 225.58, so we can store 225 bits of information in a deck of cards (and 226 bits are needed to represent the value of 52!). Also, log27(52!) = 47.44, so we can store 47 characters of our alphabet in a deck of cards (and some message with 48 characters, but not all of them).

*/

/**
 * Takes a String containing a message, and returns an array of Strings representing
 * a deck of playing cards ordered to hide the message
 */

const getDeck = () => {
  //cdhs
  let clubs = Array.from({length: 13}).fill('C');
  let diamonds = Array.from({length: 13}).fill('D');
  let hearts = Array.from({length: 13}).fill('H');
  let spades = Array.from({length: 13}).fill('S');

  const addDenom = a => a.map((c, i) => {
    console.log(`A${c}`)
    switch(i) {
      case 0: return `A${c}`
      case 9: return `T${c}`
      case 10: return `J${c}`
      case 11: return `Q${c}`
      case 12: return `K${c}`
      default: return `${i + 1}${c}`
    }
  });

  clubs = addDenom(clubs);
  diamonds = addDenom(diamonds);
  hearts = addDenom(hearts);
  spades = addDenom(spades);

  return [clubs, diamonds, hearts, spades ].join(',');
}
console.log(getDeck());

const encode = (message) => {
	console.log(message);

	const deck = [];

	return deck;
};

/**
 * Takes an array of Strings representing a deck of playing cards, and returns
 * the message that is hidden inside
 */
const decode = (deck) => {
	printDeck(deck, true); // Using unicode characters
	printDeck(deck, false); // Using regular characters

	let message = "";

	return message;
};