/*
You find yourself in Bananaland trying to buy a banana. You are super rich so you have an unlimited supply of banana-coins, but you are trying to use as few coins as possible.

The coin values available in Bananaland are stored in a sorted array coins. coins[0] = 1, and for each i (0 &lt; i &lt; coins.length) coins[i] is divisible by coins[i - 1]. Find the minimal number of banana-coins you'll have to spend to buy a banana given the banana's price.

Example

For coins = [1, 2, 10] and price = 28, the output should be
minimalNumberOfCoins(coins, price) = 6.

You have to use 10 twice, and 2 four times.
*/

function minimalNumberOfCoins(coinages, amount) {
  if (amount === 0) return 0;
  if (coinages.length === 0 && amount > 0) return Infinity;
 
  var maxCoinage = Math.max.apply(null, coinages);
  var otherCoinages = coinages.filter(coinage => coinage !== maxCoinage)
  if (amount < maxCoinage) return minimalNumberOfCoins(otherCoinages, amount);
 
  var coinsWithMaxCoinage = minimalNumberOfCoins(coinages, amount - maxCoinage) + 1;
  var coinsWithoutMaxCoinage = minimalNumberOfCoins(otherCoinages, amount);
  return Math.min(coinsWithMaxCoinage, coinsWithoutMaxCoinage);
}

// another method

function minimalNumberOfCoins(coins, price) {
    i=0
    coins=coins.reverse()
    for(a of coins){
        while(price>=a){
            price-=a
            i++
        }
    }
    return i
}


//one more

function minimalNumberOfCoins(coins, price) {
    for(i=coins.length,r=0;price;price-=c*coins[i])r+=c=price/coins[--i]|0
    return r
}
