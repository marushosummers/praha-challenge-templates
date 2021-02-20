// todo: ここに単体テストを書いてみましょう！

import { sumOfArray } from "./../functions";

test('adds 1 + 2 to equal 3', () => {
  expect(sumOfArray([1, 2])).toBe(3);
});