function getDiscountPercentage(price) {
  if (typeof price !== 'number') {
    throw new Error('Invalid input');
  }

  if (price <= 0 || price > 10000) {
    throw new Error('Invalid input');
  }

  if (price < 1000) {
    return 0;
  }

  if (price < 2000) {
    return 5;
  }
  if (price < 5000) {
    return 8;
  }
  if (price < 7000) {
    return 12;
  }
  if (price < 8500) {
    return 15;
  }

  return 18;
}

module.exports = { getDiscountPercentage };
