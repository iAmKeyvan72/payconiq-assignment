export const customStringDate = (date) => {
  return formatDDMMYYYY(date.split(',')[0]) + ' @' + date.split(',')[1];
};

export const subDay = (number) => {
  return new Date(Date.now() - (number - 1) * 24 * 60 * 60 * 1000)
    .toISOString()
    .split('T')[0];
};

export const formatDDMMYYYY = (date) => {
  const d = new Date(date).toISOString().split('T')[0];
  return d.split('-')[2] + '/' + d.split('-')[1] + '/' + d.split('-')[0];
};
