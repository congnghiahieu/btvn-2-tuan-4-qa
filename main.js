/**
 * @description
 * @author hieucien
 * @date 31/03/2024
 * @param {number} firstPrice
 * @param {string} category
 * @returns {*}
 */
function getFinalPrice(firstPrice, category) {
  if (typeof firstPrice !== 'number' || typeof category !== 'string') {
    throw new Error('Invalid input type');
  }

  if (firstPrice <= 0 || firstPrice > 10000) {
    throw new Error('Invalid firstPrice');
  }

  let discountPercentage = 0;

  switch (category) {
    case 'Food & Drink':
      discountPercentage = 0;
      break;
    case 'Clothes':
      discountPercentage = 5;
      break;
    case 'Electronics':
      discountPercentage = 10;
      break;
    default:
      throw new Error('Invalid category');
  }

  if (5000 <= firstPrice && firstPrice < 8000) {
    discountPercentage += 5;
  } else if (firstPrice >= 8000) {
    discountPercentage += 10;
  }

  console.log(discountPercentage);

  return Number.parseFloat((firstPrice * (1 - discountPercentage / 100)).toFixed(2));
}

console.log(getFinalPrice(9000, 'Food & Drink'));
console.log(getFinalPrice(6000, 'Clothes'));
console.log(getFinalPrice(8500, 'Electronics'));

module.exports = { getFinalPrice };
