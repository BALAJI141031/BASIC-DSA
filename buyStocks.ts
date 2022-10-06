// q-  https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
//2 4 1
//7,1,5,3,6,4
function maxProfit(prices: number[]): number {
  let buyingPrice: number = prices[0]
  let sellingPrice: number = prices[0]
  let profit = sellingPrice - buyingPrice
  let i = 0, j = 0
  while (i < prices.length) {
    if (j > prices.length) {
      i++
      j = i
    }
    if (prices[j] - prices[i] > profit) {
      buyingPrice = prices[i]
      profit = prices[j] - prices[i]
    }
    j++
  }

  return profit
};

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([2,4,1]))