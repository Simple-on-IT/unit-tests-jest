export const isEven = (number: unknown) => {
  if (typeof number !== 'number') {
    throw new TypeError('Input must be a number');
  }
  return number % 2 === 0;
};
