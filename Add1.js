const addUpTo = (n) => {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
};

console.log(addUpTo(1000000));
