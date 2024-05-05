export const sleep = async (delay: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, delay);
  });

export const generateFakeId = (): number => {
  return Math.floor(Math.random() * 1000) + 200;
};

/**
 * Convert a date to ISO format
 * @param date
 * @returns formated date
 */
export const toCalendarDate = (date: Date) => {
  return new Date(date).toISOString().split("T")[0];
};

export const emailRegex =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
