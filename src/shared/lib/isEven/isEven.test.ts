import { isEven } from "./isEven";

describe('isEven function', () => {
  test('returns true for an even number', () => {
    expect(isEven(4)).toBe(true);
  });
});

