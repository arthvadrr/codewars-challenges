 /*
https://www.codewars.com/kata/5739174624fc28e188000465/train/javascript

A famous casino is suddenly faced with a sharp decline of their revenues. They decide to offer Texas hold'em also online. Can you help them by writing an algorithm that can rank poker hands?
Task

Create a poker hand that has a method to compare itself to another poker hand:

PokerHand.prototype.compareWith = function(hand){...};

A poker hand has a constructor that accepts a string containing 5 cards:

var hand = new PokerHand("KS 2H 5C JD TD");

The characteristics of the string of cards are:

    Each card consists of two characters, where
    The first character is the value of the card: 2, 3, 4, 5, 6, 7, 8, 9, T(en), J(ack), Q(ueen), K(ing), A(ce)
    The second character represents the suit: S(pades), H(earts), D(iamonds), C(lubs)
    A space is used as card separator between cards

The result of your poker hand compare can be one of these 3 options:

var Result = 
{
    "win": 1,
    "loss": 2,
    "tie": 3
}

Notes

    Apply the Texas Hold'em rules for ranking the cards.
    Low aces are NOT valid in this kata.
    There is no ranking for the suits.

If you finished this kata, you might want to continue with Sortable Poker Hands

*/

const Result = { "win": 1, "loss": 2, "tie": 3 }

const PokerHand = hand => {
  hand = hand.split(' ');

  const handValues = hand.map(item => {
    item = item.split('');
    switch(item[0]) {
        case 'T': item[0] = 10; break;
        case 'J': item[0] = 11; break;
        case 'Q': item[0] = 12; break;
        case 'K': item[0] = 13; break;
        case 'A': item[0] = 14; break;
        default: item[0] = parseInt(item[0]);
    }
    return item;
  })

  hand = handValues;
  const cardNumbers = hand.map(i => i[0]).sort((a, b) => a - b);
  const cardSuits = hand.map(i => i[1]).sort();
  const highCard = cardNumbers[cardNumbers.length - 1];

  console.log(cardNumbers);

  const isStraight = () => {
    for (let i = 1; i < cardNumbers.length; i++) {
      if (cardNumbers[i - 1] + 1 !== cardNumbers[i]) {
        return false;
      }
    }
    return true;
  }

  const isFlush = () => cardSuits.every(a => a === cardSuits[0]);

  const isRoyalFlush = () => {
    if (isStraight() && isFlush() && highCard === 14) {
        return true;
    }
  }

  const isStraightFlush = () => {
    if (isStraight() && isFlush() && highCard !== 14) {
        return true;
    }
  }

  const findMatches = () => {
    const matches = [];
    for (let i = 0; i < 14; i++) {
      let filter = cardNumbers.filter(num => num === i);
      if (filter.length > 1) {
        matches.push(filter);
      } 
    }
    return matches;
  }

  const matches = findMatches();
  const isFullHouse = () => matches[0].length + matches[1].length === 5;
  const isTwoPair = () => matches[0].length + matches[1].length === 4;
  const isFourKind = () => matches[0].length === 4;
  const isThreeKind = () => matches[0].length === 3 && matches.length === 1;
  const isPair = () => matches[0].length === 2 && matches.length === 1;

  console.log(isFullHouse());
  console.log(isTwoPair());
  console.log(isFourKind());
  console.log(isThreeKind());
  console.log(isPair());

  const isHighCard = () => {}
}

PokerHand('KS KH KC JD JD');

// PokerHand.prototype.compareWith = function(hand){
//     return Result.tie;
// }