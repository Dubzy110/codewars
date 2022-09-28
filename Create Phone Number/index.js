function createPhoneNumber(numbers) {
  const num = numbers.join("");
  const a = `${num.slice(0, 3)}`;
  const b = `${num.slice(3, 6)}`;
  const c = `${num.slice(6)}`;
  return `(${a}) ${b}-${c}`;
}

const a = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(a);
