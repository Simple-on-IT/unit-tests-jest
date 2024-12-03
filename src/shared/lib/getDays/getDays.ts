import dayjs from "dayjs";

export const getDays = (currentDate: dayjs.Dayjs) => {
  const startOfMonth = currentDate.startOf("month");
  const daysInMonth = currentDate.daysInMonth();
  const startDayOfWeek = startOfMonth.day();

  const days: (number | null)[] = [];
  for (let i = 0; i < (startDayOfWeek || 7) - 1; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return days
}