export function recentDateFormat(date: Date) {
  const startTime = new Date(date).getTime();
  const endTime = new Date().getTime();

  const diff = (endTime - startTime) / 1000;

  const formatter = new Intl.RelativeTimeFormat('ko', { numeric: 'auto' });

  const times = [
    { name: 'year', milliSeconds: 60 * 60 * 24 * 365 },
    { name: 'month', milliSeconds: 60 * 60 * 24 * 30 },
    { name: 'day', milliSeconds: 60 * 60 * 24 },
    { name: 'hour', milliSeconds: 60 * 60 },
    { name: 'minute', milliSeconds: 60 },
  ] as const;

  // eslint-disable-next-line no-restricted-syntax
  for (const value of times) {
    const elapsedTime = Math.floor(diff / value.milliSeconds);

    if (elapsedTime > 0) {
      return formatter.format(-elapsedTime, value.name);
    }
  }
  return '방금 전';
}
