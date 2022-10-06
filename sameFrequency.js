function sameFrequency(num1, num2) {
  // good luck. Add any arguments you deem necessary.
  const str1 = num1.toString();
  const str2 = num2.toString();
  if (str1.length !== str2.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < str1.length; i++) {
    obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
  }

  for (let j = 0; j < str2.length; j++) {
    obj2[str2[j]] = (obj2[str2[j]] || 0) + 1;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false
