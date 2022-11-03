/*
https://www.codewars.com/kata/524c74f855025e2495000262/train/javascript

Texas Hold'em is a Poker variant in which each player is given two "hole cards". Players then proceed to make a series of bets while five "community cards" are dealt. If there are more than one player remaining when the betting stops, a showdown takes place in which players reveal their cards. Each player makes the best poker hand possible using five of the seven available cards (community cards + the player's hole cards).

Possible hands are, in descending order of value:

    Straight-flush (five consecutive ranks of the same suit). Higher rank is better.
    Four-of-a-kind (four cards with the same rank). Tiebreaker is first the rank, then the rank of the remaining card.
    Full house (three cards with the same rank, two with another). Tiebreaker is first the rank of the three cards, then rank of the pair.
    Flush (five cards of the same suit). Higher ranks are better, compared from high to low rank.
    Straight (five consecutive ranks). Higher rank is better.
    Three-of-a-kind (three cards of the same rank). Tiebreaker is first the rank of the three cards, then the highest other rank, then the second highest other rank.
    Two pair (two cards of the same rank, two cards of another rank). Tiebreaker is first the rank of the high pair, then the rank of the low pair and then the rank of the remaining card.
    Pair (two cards of the same rank). Tiebreaker is first the rank of the two cards, then the three other ranks.
    Nothing. Tiebreaker is the rank of the cards from high to low.

Given hole cards and community cards, complete the function hand to return the type of hand (as written above, you can ignore case) and a list of ranks in decreasing order of significance, to use for comparison against other hands of the same type, of the best possible hand.

hand(["A:♠", "A♦"], ["J♣", "5♥", "10♥", "2♥", "3♦"])
// ...should return {type: "pair", ranks: ["A", "J", "10", "5"]}
hand(["A♠", "K♦"], ["J♥", "5♥", "10♥", "Q♥", "3♥"])
// ...should return {type: "flush", ranks: ["Q", "J", "10", "5", "3"]}

EDIT: for Straights with an Ace, only the ace-high straight is accepted. An ace-low straight is invalid (ie. A,2,3,4,5 is invalid). This is consistent with the author's reference solution. ~docgunthrop
*/

const hand = (holeCards, communityCards) => {
  const tallyScore = hand => {
    console.table(hand.sort());
    const handValues = hand.map(item => {
      item = item.split('');
      console.log(item.length);
      switch(item[0]) {
          case '1': {
            if (item.length === 3) {
              item[0] = 10; 
              item.splice(1, 1);
              break;
            } 
          }
          case 'J': item[0] = 11; break;
          case 'Q': item[0] = 12; break;
          case 'K': item[0] = 13; break;
          case 'A': item[0] = 14; break;
          default: item[0] = parseInt(item[0]);
      }
      return item;
    }).sort();
    
    hand = handValues;
    console.log(hand);
    const cardNumbers = hand.map(i => i[0]).sort((a, b) => a - b);
    const cardSuits = hand.map(i => i[1]).sort();
    const highCard = cardNumbers => cardNumbers[cardNumbers.length - 1];
    let handScore = 1;
    let pairScore1 = 0;
    let pairScore2 = 0;
    const formatScore = score => score < 10 ? `0${score}` : `${score}`;

    const findMatches = () => {
      const matches = [];
      for (let i = 2; i < 15; i++) {
        let filter = cardNumbers.filter(num => num === i);
        if (filter.length > 1) {
          matches.push(filter);
        } 
      }
      matches.push([]); // to compare length of matches[1] (can't if undefined!)
      matches.push([]);

      if (matches.length === 3) {
        pairScore1 = Math.max(...matches[0]);
      } else if (matches.length > 3) {
        pairScore2 = Math.max(...matches[1]);
      }

      return matches;
    }
    const matches = findMatches();

    const isStraight = () => {
      for (let i = 1; i < cardNumbers.length; i++) {
        if (cardNumbers[i - 1] + 1 !== cardNumbers[i]) {
          return false;
        }
      }

      return true;
    }

    const isFlush = () => cardSuits.every(a => a === cardSuits[0]);
    const isRoyalFlush = () => isStraight() && isFlush() && highCard === 14;
    const isStraightFlush = () => isStraight() && isFlush() && highCard !== 14;
    const isFullHouse = () => matches[0].length + matches[1].length === 5;
    const isTwoPair = () => matches[0].length + matches[1].length === 4;
    const isFourKind = () => matches[0].length === 4;
    const isThreeKind = () => matches[0].length === 3 && matches.length === 3;
    const isPair = () => matches[0].length === 2 && matches.length === 3;

    if (isRoyalFlush()) handScore += 9
    else if (isStraightFlush()) handScore += 8
    else if (isFourKind()) handScore += 7
    else if (isFullHouse()) handScore += 6
    else if (isFlush()) handScore += 5
    else if (isStraight()) handScore += 4
    else if (isThreeKind()) handScore += 3
    else if (isTwoPair()) handScore += 2
    else if (isPair()) handScore += 1

    const cardNumberSequenceScore = (cardNumbers) => {
      return cardNumbers.map(n => {
        n = formatScore(n);
        return n;
      }).reverse().join('');
    };
    
    const totalScore = parseInt(`${formatScore(handScore)}${formatScore(pairScore1)}${formatScore(pairScore2)}${cardNumberSequenceScore(cardNumbers)}`);
    return totalScore;
  }

  const combo = [holeCards, communityCards].flatMap(a => a);
  console.log(tallyScore(combo))
  
  const handObj = {type: '', ranks: []}
  return handObj;
}

console.log(hand(['K♠','A♦'],['J♣','Q♥','9♥','2♥','3♦']));
console.log(hand(['8♠','6♠'],['7♠','5♠','9♠','J♠','10♠']));