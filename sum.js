const sum = (...numbers) => {
  if (numbers.length === 0) {
    throw new Error("Array is empty");
  }

  const result = numbers.reduce((previous, current) => {
    if (isNaN(current)) {
      throw new TypeError("Not a number");
    }
    return previous + current;
  }, 0);

  return result;
};

module.exports = sum;
