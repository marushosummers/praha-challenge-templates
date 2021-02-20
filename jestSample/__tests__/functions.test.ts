// todo: ここに単体テストを書いてみましょう！

import { sumOfArray, asyncSumOfArray } from "./../functions";

describe("sumOfArray", (): void => {

    test('1+2が3になる', () => {
        expect(sumOfArray([1, 2])).toBe(3);
    });

    test('-1+1が0になる', () => {
        expect(sumOfArray([-1, 1])).toBe(0);
    });

    test('空のArrayはErrorになる', () => {
        expect(() => {
            sumOfArray([]);
        }).toThrow(TypeError);
    });

    test('1はそのまま1', () => {
        expect(sumOfArray([1])).toBe(1);
    });

    test('1+2+3は6になる', () => {
        expect(sumOfArray([1,2,3])).toBe(6);
    });
});

describe("asyncSumOfArray", (): void => {

    test('1+2が3になる', () => {
        asyncSumOfArray([1, 2]).then(data => {
            expect(data).toBe(3);
        });
    });

    test('-1+1が0になる', () => {
        asyncSumOfArray([-1, 1]).then(data => {
            expect(data).toBe(0);
        });
    });

    test('空のArrayはErrorになる', () => {
        asyncSumOfArray([]).then(data => {
            expect(data).toThrow(TypeError);
        });
        });


});
