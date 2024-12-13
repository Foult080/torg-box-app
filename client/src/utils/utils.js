export const calculateDegrees = (time) => {
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDeg = ((hours % 12) + minutes / 60) * 30;
  const minuteDeg = (minutes + seconds / 60) * 6;
  const secondDeg = seconds * 6;

  return { hourDeg, minuteDeg, secondDeg };
};

export const getTimeInTimezone = (timezoneOffset) => {
  if (!timezoneOffset) return new Date();

  const now = new Date();
  // Получаем время в миллисекундах, корректируем таймзону
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const timezoneTime = new Date(utc + timezoneOffset * 3600000);
  return timezoneTime;
};
