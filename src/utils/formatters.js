export const timestampToDate = timestamp => {
  const date = new Date(timestamp);
  const dateString = date.toLocaleDateString('pt-br');
  const time = date.toLocaleTimeString('pt-br').slice(0, 5);

  return `${dateString} - ${time}`;
};

export const formatPercentage = percentageNumber =>
  `${(percentageNumber * 100).toFixed(2)}%`;
