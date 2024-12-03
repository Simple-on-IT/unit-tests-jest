import dayjs from "dayjs";
import { getDays } from "./getDays";

jest.mock('dayjs', () => {
  return {
    __esModule: true,
    default: jest.fn(() => ({
      startOf: jest.fn(() => ({
        day: () => 5,
      })),
      daysInMonth: jest.fn(() => 30),
    })),
  };
});

describe('isDecember function', () => {
  test('returns correct days for a month starting on Sunday', () => {
    expect(getDays(dayjs('2024-11'))).toEqual([
      null, null, null, null, // Пустые места до начала месяца
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    ]);
  });
});

