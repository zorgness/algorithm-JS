// example if n = 4 sum up return 10 (1 + 2 + 3 + 4)

function sumUp(n) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }
  return result;
}

let start = 0;
let end = 0;

start = performance.now();

console.log(sumUp(4));
end = performance.now();
console.log(end - start);

// linear trend

function sumUp2(n) {
  return (n / 2) * (1 + n);
}

start = performance.now();

console.log(sumUp2(100));
end = performance.now();
console.log(end - start);

console.log(sumUp2(1000));
end = performance.now();
console.log(end - start);

// constant trend

// analyse by counting the expresion executions
