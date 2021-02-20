// todo: ここに単体テストを書いてみましょう！

import { sumOfArray, asyncSumOfArray } from "./../functions";

test('sum: adds 1 + 2 to equal 3', () => {
  expect(sumOfArray([1, 2])).toBe(3);
});

test('async: adds 1 + 2 to equal 3', () => {
  return asyncSumOfArray([1, 2]).then(data => {
    expect(data).toBe(3);
  });
});