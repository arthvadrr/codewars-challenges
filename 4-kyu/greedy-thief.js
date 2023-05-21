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

// const bestBag = [];

// const tempobj = {
//   include: [],
//   exclude: []
// }

// let currentBranch = [];

// const knapsack = (
//     values, 
//     weights, 
//     position, 
//     maxWeight,
//     branch,
//     included
//   ) => {
//   if (maxWeight < 0) {
//     currentBranch = [];
//     return -99999;
//   }

//   if (position < 0 || maxWeight === 0) {
//     return 0;
//   }

//   const include = values[position] + knapsack(
//     values, 
//     weights, 
//     position - 1, 
//     maxWeight - weights[position],
//     [],
//     1
//   );

//   const exclude = knapsack(
//     values, 
//     weights, 
//     position - 1, 
//     maxWeight,
//     [],
//     0
//   );

//   if (included) {
//     currentBranch.push({weight: weights[position], price: values[position]});
//   } else {
//     currentBranch = [];
//   }

//   return Math.max(include, exclude)
// };

// const greedyThief = (itemsArr, maxWeight) => {
//   const weights = itemsArr.map(item => item.weight);
//   const values = itemsArr.map(item => item.price);
//   const bestValue = knapsack(values, weights, values.length - 1, maxWeight, [], 1);
//   console.log(bestValue);
//   console.log(currentBranch);
//   return bestBag;
// };

const greedyThief = (items, maxWeight) => {
  const path = [];
  const cache = new Map();

  const DFS = (index, left) => {
    if (index === items.length) return [0, null];
    if (cache.has(`${index}-${left}`)) return cache.get(`${index}-${left}`);

    const [leftA] = DFS(index + 1, left);
    const { weight: A, price: B } = items[index];
    
    let [rightA, rightB] = [null, null];


    if (A <= left) {
      [rightA, rightB] = DFS(index + 1, left - A);
      rightA += B;
    }

    const result = leftA >= rightA ? [leftA, 0] : [rightA, 1];
    cache.set(`${index}-${left}`, result);
    return result;
  };

  for (let i = 0; i < items.length; i++) {
    if (DFS(i, maxWeight)[1] === 1) {
      maxWeight -= items[i].weight;
      path.push(items[i]);
    }
  }

  return path;
};

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
    10,
    [
      { weight: 0, price: 2 },
      { weight: 10, price: 10 },
    ]
  )
);
