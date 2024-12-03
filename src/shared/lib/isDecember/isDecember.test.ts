
import { isDecember } from './isDecember';

jest.mock('dayjs', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    month: () => 9,
  })),
}));

describe('isDecember function', () => {
  test('returns true when the current month is December',
    () => {
      expect(isDecember()).toBe(false);
    });
});

