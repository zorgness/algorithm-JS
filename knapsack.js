// find the best combination of values without exceeding the maximum weight
const items = [
  { id: "a", val: 10, w: 3 },
  { id: "b", val: 6, w: 8 },
  { id: "c", val: 3, w: 3 },
];

const values = [];
const weights = [];

items.forEach((item) => {
  values.push(item.val);
  weights.push(item.w);
});

const maxWeight = 8;

const bag = ["a", "c"];

function findBestCombination(list, max) {
  const tmp = [];
  return tmp;
}

console.log(findBestCombination(items, maxWeight) === bag);
