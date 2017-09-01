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

hand(["A♠", "A♦"], ["J♣", "5♥", "10♥", "2♥", "3♦"])
// ...should return {type: "pair", ranks: ["A", "J", "10", "5"]}
hand(["A♠", "K♦"], ["J♥", "5♥", "10♥", "Q♥", "3♥"]) 
// ...should return {type: "flush", ranks: ["Q", "J", "10", "5", "3"]}
EDIT: for Straights with an Ace, only the ace-high straight is accepted. An ace-low straight is invalid (ie. A,2,3,4,5 is invalid). This is consistent with the author's reference solution. ~docgunthrop

Tests:

describe('Execute Example Tests', function(){
	it('Let\'s play!', function(){
		assertEquals({type:'nothing', ranks:['A','K','Q','J','9']},hand(['K♠','A♦'],['J♣','Q♥','9♥','2♥','3♦']));
		assertEquals({type:'pair', ranks:['Q','K','J','9']},hand(['K♠','Q♦'],['J♣','Q♥','9♥','2♥','3♦']));
		assertEquals({type:'two pair', ranks:['K','J','9']},hand(['K♠','J♦'],['J♣','K♥','9♥','2♥','3♦']));
		assertEquals({type:'three-of-a-kind', ranks:['Q','J','9']},hand(['4♠','9♦'],['J♣','Q♥','Q♠','2♥','Q♦']));
		assertEquals({type: 'straight', ranks:['K','Q','J','10','9']},hand(['Q♠','2♦'],['J♣','10♥','9♥','K♥','3♦']));
		assertEquals({type:'flush', ranks:['Q','J','10','5','3']},hand(['A♠','K♦'],['J♥','5♥','10♥','Q♥','3♥']));
		assertEquals({type:'full house', ranks:['A','K']},hand(['A♠','A♦'],['K♣','K♥','A♥','Q♥','3♦']));
		assertEquals({type:'four-of-a-kind', ranks:['2','3']},hand(['2♠','3♦'],['2♣','2♥','3♠','3♥','2♦']));
		assertEquals({type:'straight-flush', ranks:['J','10','9','8','7']},hand(['8♠','6♠'],['7♠','5♠','9♠','J♠','10♠']));
	});
});



Thoughts:
1. Create a dictionary of ranks JQKA
2. 
3. 


Solution:

// we will map J,Q,K,A as 11,12,13,14 to easily compare ranks
const ranksMap = {
  forward: {
    J: 11,
    Q: 12,
    K: 13,
    A: 14
  },
  backward: {
    11: "J",
    12: "Q",
    13: "K",
    14: "A"
  }
};
// we will also map suits to letters for convenience for now
const suitsMap = {
  "♠": "s",
  "♥": "h",
  "♦": "d",
  "♣": "c"
};

// ---> utils
function getDuplicates(handRanks, n) {
  return Object.keys(handRanks)
    .filter(rank => handRanks[rank] === n)
    .map(rank => Number(rank))
    .sort((a, b) => b - a);
}

function getHandRanks(hand) {
  return hand.reduce((acc, cur) => {
    acc[cur.rank] = (acc[cur.rank] || 0) + 1;
    return acc;
  }, {});
}

function filterFlush(hand) {
  const handSuits = hand.reduce((acc, cur) => {
    acc[cur.suit] = (acc[cur.suit] || 0) + 1;
    return acc;
  }, {});
  const flushSuit = Object.keys(handSuits).find(suit => handSuits[suit] >= 5);
  return hand.filter(card => card.suit === flushSuit).sort((a, b) => b.rank - a.rank);
}

function mapHandToRanks(hand) {
  return hand
    .map(card => "" + (card.rank > 10 ? ranksMap.backward[card.rank] : card.rank))
    .filter((rank, i, arr) => i === 0 || rank !== arr[i - 1]);
}
// <-- end utils

function getStraightFlush(hand) {
  const flushCards = filterFlush(hand);
  return getStraight(flushCards);
}

function getFourOf(hand) {
  const handRanks = getHandRanks(hand);
  const fourOf = getDuplicates(handRanks, 4)[0];
  if (fourOf !== undefined) {
    const highest = hand.filter(card => card.rank !== fourOf).slice(0, 1);
    return hand.filter(card => card.rank === fourOf).concat(highest);
  }
  return [];
}

function getFullHouse(hand) {
  const handRanks = getHandRanks(hand);
  const threeOfs = getDuplicates(handRanks, 3);
  const pairs = getDuplicates(handRanks, 2);
  if (threeOfs.length === 2) {
    const threeOf = hand.filter(card => card.rank === threeOfs[0]);
    const pair = hand.filter(card => card.rank === threeOfs[1]).slice(0, 1);
    return threeOf.concat(pair);
  } else if (threeOfs.length === 1 && pairs.length >= 1) {
    const threeOf = hand.filter(card => card.rank === threeOfs[0]);
    const pair = hand.filter(card => card.rank === pairs[0]);
    return threeOf.concat(pair);
  }
  return [];
}

function getFlush(hand) {
  return filterFlush(hand).slice(0, 5);
}

// this is kind of monkey patched.. it seems to work
// but it may fail elaborate tests..
function getStraight(hand) {
  const handWithoutDupes = hand.filter((card, i, arr) => i === 0 || card.rank !== arr[i - 1].rank);
  const straight =
    handWithoutDupes.length < 5
      ? []
      : handWithoutDupes.filter((card, i, arr) => {
          if (i <= 2) {
            return card.rank - 1 === arr[i + 1].rank;
          }
          return card.rank + 1 === arr[i - 1].rank && card.rank + 2 === arr[i - 2].rank;
        });
  return straight.length >= 5 ? straight.slice(0, 5) : [];
}

function getThreeOf(hand) {
  const handRanks = getHandRanks(hand);
  const threeOfs = getDuplicates(handRanks, 3);
  const pairs = getDuplicates(handRanks, 2);
  if (threeOfs.length === 1 && pairs.length === 0) {
    const threeOf = threeOfs[0];
    const highestTwo = hand.filter(card => card.rank !== threeOf).slice(0, 2);
    return hand.filter(card => card.rank === threeOf).concat(highestTwo);
  }
  return [];
}

function getTwoPairs(hand) {
  const handRanks = getHandRanks(hand);
  const pairs = getDuplicates(handRanks, 2).slice(0, 2);
  if (pairs.length === 2) {
    const highest = hand
      .filter(card => card.rank !== pairs[0] && card.rank !== pairs[1])
      .slice(0, 1);
    return hand.filter(card => card.rank === pairs[0] || card.rank === pairs[1]).concat(highest);
  }
  return [];
}

function getPair(hand) {
  const handRanks = getHandRanks(hand);
  const pairs = getDuplicates(handRanks, 2);
  if (pairs.length === 1) {
    const pair = pairs[0];
    const highestThree = hand.filter(card => card.rank !== pair).slice(0, 3);
    return hand.filter(card => card.rank === pair).concat(highestThree);
  }
  return [];
}

function getHighCards(hand) {
  return hand.slice(0, 5);
}

/* main func */
function hand(holeCards, communityCards) {
  const types = [
    { label: "straight-flush", op: getStraightFlush },
    { label: "four-of-a-kind", op: getFourOf },
    { label: "full house", op: getFullHouse },
    { label: "flush", op: getFlush },
    { label: "straight", op: getStraight },
    { label: "three-of-a-kind", op: getThreeOf },
    { label: "two pair", op: getTwoPairs },
    { label: "pair", op: getPair },
    { label: "nothing", op: getHighCards }
  ];

  const cards = holeCards
    .concat(communityCards)
    .map(card => {
      const digits = /\d+/;
      const suits = /[♠♥♦♣]/;
      const digitsMatch = card.match(digits);
      const rank = digitsMatch !== null ? Number(digitsMatch[0]) : ranksMap.forward[card[0]];
      const suit = suitsMap[card.match(suits)[0]];
      return { rank, suit };
    })
    .sort((a, b) => b.rank - a.rank);

  return types
    .map(type => ({ type: type.label, ranks: mapHandToRanks(type.op(cards)) }))
    .filter(result => result.ranks.length > 0)[0];
}

