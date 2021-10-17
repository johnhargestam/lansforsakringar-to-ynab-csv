export const date = (date: string) =>
  date.replace(
    /\d{2}(\d{2})-(\d{2})-(\d{2})/,
    (_, year, month, day) => `${month}/${day}/${year}`
  );
