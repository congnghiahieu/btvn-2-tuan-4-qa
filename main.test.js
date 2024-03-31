const { getFinalPrice } = require('./main');

test('Kiểm thử hàm getFinalPrice bằng bảng quyết định', () => {
  expect(() => getFinalPrice('abc', 123)).toThrow('Invalid input type');
  expect(() => getFinalPrice(0, 'Food & Drink')).toThrow('Invalid firstPrice');

  expect(() => getFinalPrice(2500, 'Clothes')).toEqual(2250);
  expect(() => getFinalPrice(6000, 'Electronics')).toEqual(5100);

  expect(() => getFinalPrice(9000, 'abc')).toThrow('Invalid category');
  expect(() => getFinalPrice(99999, 'abc')).toThrow('Invalid firstPrice');
});

test('Kiểm thử hàm getFinalPrice bằng giá trị biên mạnh', () => {
  expect(() => getFinalPrice(5000, 123)).toThrow('Invalid input type');
  expect(() => getFinalPrice(5000, 'Food & Drink')).toEqual(4750);
  expect(() => getFinalPrice(5000, 'abc')).toThrow('Invalid category');

  expect(() => getFinalPrice(0, 'Food & Drink')).toThrow('Invalid firstPrice');
  expect(() => getFinalPrice(1, 'Clothes')).toEqual(0.95);
  expect(() => getFinalPrice(2, 'Electronics')).toEqual(1.8);
  expect(() => getFinalPrice(9999, 'Food & Drink')).toEqual(8999.1);
  expect(() => getFinalPrice(10000, 'Clothes')).toEqual(8500);
  expect(() => getFinalPrice(10001, 'Electronics')).toThrow('Invalid firstPrice');
});

test('Kiểm thử hàm getFinalPrice bằng kiểm thử luồng điều khiển với độ đo C2', () => {
  expect(() => getFinalPrice('abc', 123)).toThrow('Invalid input type');
  expect(() => getFinalPrice(0, 'abc')).toThrow('Invalid firstPrice');
  expect(() => getFinalPrice(1, 'abc')).toThrow('Invalid category');

  expect(() => getFinalPrice(1000, 'Food & Drink')).toEqual(1000);
  expect(() => getFinalPrice(9000, 'Clothes')).toEqual(8075);
  expect(() => getFinalPrice(7000, 'Electronics')).toEqual(5950);
});

test('Kiểm thử hàm getFinalPrice bằng kiểm thử luồng dữ liệu với độ phủ all-uses', () => {
  expect(() => getFinalPrice('abc', 123)).toThrow('Invalid input type');
  expect(() => getFinalPrice(0, 'abc')).toThrow('Invalid firstPrice');
  expect(() => getFinalPrice(1, 'abc')).toThrow('Invalid category');

  expect(() => getFinalPrice(1000, 'Food & Drink')).toEqual(1000);
  expect(() => getFinalPrice(7000, 'Food & Drink')).toEqual(6650);
  expect(() => getFinalPrice(9000, 'Food & Drink')).toEqual(8100);
  expect(() => getFinalPrice(6000, 'Clothes')).toEqual(5400);
  expect(() => getFinalPrice(8500, 'Electronics')).toEqual(6800);
});
