const sum = (...numbers) => {
  const result = numbers.reduce((previous, current) => {
    if (isNaN(current)) {
      throw new TypeError("Not a number");
    }
    return previous - current;
  });

  return result;
};

module.exports = sum;
