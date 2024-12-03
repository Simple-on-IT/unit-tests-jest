import dayjs from 'dayjs';

export const isDecember = () => {
  // В dayjs месяцы начинаются с 0
  return dayjs().month() === 11;
};
