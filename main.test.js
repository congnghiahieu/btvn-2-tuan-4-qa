const { getDiscountPercentage } = require('./main');

test('Kiểm thử hàm getDiscountPercentage bằng bảng quyết định', () => {
  expect(() => getDiscountPercentage(-1000)).toThrow(Error);
  expect(getDiscountPercentage(500)).toEqual(0);
  expect(getDiscountPercentage(1500)).toEqual(5);
  expect(getDiscountPercentage(3500)).toEqual(8);
  expect(getDiscountPercentage(6800)).toEqual(12);
  expect(getDiscountPercentage(7200)).toEqual(15);
  expect(getDiscountPercentage(9000)).toEqual(18);
  expect(() => getDiscountPercentage(15000)).toThrow(Error);
});

test('Kiểm thử hàm getDiscountPercentage bằng giá trị biên', () => {
  expect(() => getDiscountPercentage(-1)).toThrow(Error);
  expect(() => getDiscountPercentage(0)).toThrow(Error);
  expect(getDiscountPercentage(1)).toEqual(0);
  expect(getDiscountPercentage(5000)).toEqual(12);
  expect(getDiscountPercentage(9999)).toEqual(18);
  expect(getDiscountPercentage(10000)).toEqual(18);
  expect(() => getDiscountPercentage(10001)).toThrow(Error);
});
