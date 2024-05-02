export const sleep = async (delay: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, delay);
  });

export const generateFakeId = (): number => {
  return Math.floor(Math.random() * 1000);
};

export const toCalendarDate = (date: Date) => {
  return new Date(date).toISOString().split("T")[0];
};
