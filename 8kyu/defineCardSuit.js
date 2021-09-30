// https://www.codewars.com/kata/5a360620f28b82a711000047/train/javascript

// You get any card as an argument. Your task is to return a suit of this card.

// Our deck (is preloaded):

// deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
//         '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
//         '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
//         '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];
// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'



function defineSuit(card) {
  if (card[1] === '♣') {
    return 'clubs'
  } else if (card[1] === '♦') {
    return 'diamonds'
  } else if (card[1] === '♥') {
    return 'hearts'
  } else if (card[1] === '♠') {
    return 'spades'
  }
}