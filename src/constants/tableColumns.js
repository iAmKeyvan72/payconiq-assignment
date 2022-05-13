import strings from './strings';

export const timeSeriesColumns = [
  {
    title: strings.labels.date,
    key: 'date',
  },
  {
    title: strings.labels.exchangeRate,
    key: 'rate',
  },
];

export const statisticsColumns = [
  {
    title: strings.labels.statistics,
    key: 'label',
  },
  {
    title: '',
    key: 'value',
  },
];

export const historyColumns = [
  {
    title: strings.labels.date,
    key: 'date',
  },
  {
    title: strings.labels.event,
    key: 'event',
  },
  {
    title: strings.labels.actions,
    key: 'actions',
  },
];
