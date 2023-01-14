// index represents the days
// find best day to buy and best day to sell
// return the profit
const prices = [7, 1, 5, 3, 6, 4];

const output = 5;

function bestProfit(prices) {
  const minPrice = Math.min(...prices);

  const tmp = prices.splice(prices.indexOf(minPrice));

  const bestPrice = Math.max(...tmp);

  return bestPrice - minPrice;
}

console.log(bestProfit(prices) === output);

// Second way of calculating with reducer

const prices2 = [7, 1, 5, 3, 6, 4];

const output2 = 5;

function bestProfit2(prices) {
  const min = prices.reduce((accumulator, current) => {
    return accumulator < current ? accumulator : current;
  });

  const buyDay = prices.indexOf(min);

  const max = prices.splice(buyDay).reduce((accumulator, current) => {
    return accumulator > current ? accumulator : current;
  });

  return max - min;
}

console.log(bestProfit2(prices2) === output2);
