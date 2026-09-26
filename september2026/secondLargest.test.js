import { secondLargest } from '../src/secondLargest';

describe('secondLargest', () => {
  test('returns 3 for [1, 2, 3, 4]', () => {
    expect(secondLargest([1, 2, 3, 4])).toBe(3);
  });

  test('returns 94 for [20, 139, 94, 67, 31]', () => {
    expect(secondLargest([20, 139, 94, 67, 31])).toBe(94);
  });

  test('returns 4 when largest number is duplicated', () => {
    expect(secondLargest([2, 3, 4, 6, 6])).toBe(4);
  });

  test('handles decimal numbers', () => {
    expect(secondLargest([10, -17, 55.5, 44, 91, 0])).toBe(55.5);
  });

  test('handles duplicate numbers', () => {
    expect(
      secondLargest([1, 0, -1, 0, 1, 0, -1, 1, 0])
    ).toBe(0);
  });
});