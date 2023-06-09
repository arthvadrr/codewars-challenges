/*

const sortByScore = items => items.sort((a, b) => a.score - b.score).reverse();

const getScoredItems = items => {
  const itemsScored = items.map(item => {
    const { weight, price } = item;

    return {
      weight: weight,
      price: price,
      score: price / weight,
    };
  });

  return itemsScored;
};

const getBestBag = results => results.reduce((a, b) => (a.maxScore > b.maxScore ? a : b));

const greedyThief = (itemsArr, maxWeight) => {
  console.log(itemsArr);
  let items = [...itemsArr];
  const results = []; // array of arrays

  while (items.length > 0) {
    const bag = [];
    let currentBagScored = getScoredItems(items);
    let sortedBagScored = sortByScore(currentBagScored);
    let currentWeight = 0;

    for (const item of sortedBagScored) {
      if (currentWeight + item.weight <= maxWeight) {
        bag.push({ weight: item.weight, price: item.price });
        currentWeight += item.weight;
      }
    }

    const maxScore = bag.reduce((a, b) => a + b.price, 0);

    results.push({ maxScore: maxScore, bag });

    sortedBagScored.pop();

    items = sortedBagScored.map(item => {
      return {
        weight: item.weight,
        price: item.price,
      };
    });
  }
  
  return getBestBag(results).bag;
};
*/
/*
https://www.codewars.com/kata/58296c407da141e2c7000271/train/javascript

In a dark, deserted night, a thief entered a shop. There are some items in the room, and the items have different weight (in kg) and price (in $).

The thief is greedy, his desire is to take away all the goods. But unfortunately, his bag can only hold n kg of items. So he has to make a choice, try to take away more valuable items.

Please complete the function to help the thief to make the best choices. Two arguments will be given: items (an array that contains all items) and n (the maximum weight the package can accommodate).

The list of items is provided as an array of objects:

[
  {weight:2, price:6},
  ...
]

The result should be a list of the original items that the thief should take away and that has the maximum possible total price.

Notes:

    Order of the items in the output do not matter
    If more than one valid solutions exist, you should return one of them
    If no valid solution should return []
    You should not modify argument items or the items themselves (in languages where they are mutable).
    Pay attention to performance: the thief doesn't have all night to decide what to take or not!
*/

/*
  We will have to grab the best items first, then check each item to see if we can replace it.
*/

/*
in knapsack return, keep track of item weight and price to build the greedyThief return
*/
let bestBag = {};

const knapsack = (
    values, 
    weights, 
    position, 
    maxWeight
  ) => {

  if (position === 0) {
    bestBag = {};
  }

  if (maxWeight < 0) {
    return -99999;
  }

  if (position < 0 || maxWeight === 0) {
    return 0;
  }

  const include = values[position] + knapsack(
    values, 
    weights, 
    position - 1, 
    maxWeight - weights[position]
  );

  const exclude = knapsack(
    values, 
    weights, 
    position - 1, 
    maxWeight
  );

  if (include > exclude) {
    bestBag[position] = {weight: weights[position], price: values[position], include: true};
  } else {
    bestBag[position - 1] = {weight: weights[position], price: values[position], include: false};
  }

  return Math.max(include, exclude)
};

const greedyThief = (itemsArr, maxWeight) => {
  const weights = itemsArr.map(item => item.weight);
  const values = itemsArr.map(item => item.price);
  const bestValue = knapsack(values, weights, values.length - 1, maxWeight);
  console.log(bestBag);

  return bestValue;
};


// const greedyThief = (itemsArr, maxWeight) => {
//   const items = itemsArr.sort((a, b) => a.weight - b.weight);
//   const weights = items.map(item => item.weight);
//   const prices = items.map(item => item.price);

//   function getBestBag(maxWeight, weights, prices, position) {
//       const bestBag = [];
//       const branch = new Array(position + 1);
//       let weight = 0;
//       let i = 0;

//       for(;i < branch.length;i++) {
//           branch[i] = new Array(maxWeight + 1);
//           for(let j = 0;j<maxWeight+1;j++) branch[i][j] = 0;
//       }
   
//       for (i = 0; i <= position; i++) {
//           for (weight = 0; weight <= maxWeight; weight++) {
//               if (i == 0 || weight == 0) branch[i][weight] = 0;
//               else if (weights[i - 1] <= weight) {
//                 branch[i][weight] = Math.max(prices[i - 1] +
//                 branch[i - 1][weight - weights[i - 1]],
//                 branch[i - 1][weight]);
//               } else branch[i][weight] = branch[i - 1][weight];
//           }
//       }

//       let result = branch[position][maxWeight];
  
//       weight = maxWeight;

//       for (i = position; i > 0 && result > 0; i--) {
//           if (result == branch[i - 1][weight]) continue;
//           else {
//               bestBag.push({weight: weights[i - 1], price: prices[i - 1]});
//               result = result - prices[i - 1];
//               weight = weight - weights[i - 1];
//           }
//       }

//       return bestBag;
//     }

//   return getBestBag(maxWeight, weights, prices, itemsArr.length);
// };

console.log(
  greedyThief(
    [
      { weight: 2, price: 6 },
      { weight: 2, price: 3 },
      { weight: 6, price: 5 },
      { weight: 5, price: 4 },
      { weight: 4, price: 6 },
    ],
    10
  ),
  [
    { weight: 2, price: 6 },
    { weight: 2, price: 3 },
    { weight: 4, price: 6 },
  ]
);

console.log(
  greedyThief(
    [
      { weight: 2, price: 2 },
      { weight: 2, price: 2 },
      { weight: 2, price: 2 },
      { weight: 2, price: 2 },
      { weight: 2, price: 2 },
      { weight: 0, price: 2 },
      { weight: 10, price: 10 },
      { weight: 5, price: 5 },
    ],
    10
  ), [
    { weight: 0, price: 2 },
    { weight: 10, price: 10 },
  ]
);
