import { useState, useEffect } from 'react';
import * as api from '../apis';
import convertToArray from '../helpers/convertToArray';
import { formatDDMMYYYY } from '../helpers/dateHelpers';

export const useSupportedSymbols = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    api
      .getSupportedSymbols()
      .then((res) => setData(res.symbols))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  let symbols = [];

  if (!isLoading) {
    convertToArray(data).map((symbol) => symbols.push(symbol.code));
  }
  return { symbols, isLoading, error };
};

export const useExchangeRate = (from, to, amount) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async () => {
    setIsLoading(true);
    try {
      const response = await api.getExchangeRate(from, to, amount);
      setData(response);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return { data, isLoading, error, request };
};

export const useTimeSeries = (from, to, start_date, end_date) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async () => {
    setIsLoading(true);
    try {
      const response = await api.getTimeSeries(from, to, start_date, end_date);
      setData(response);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  let days = [];

  if (!isLoading && data) {
    Object.entries(data).map(([key, value]) =>
      days.push({
        date: key,
        rate: value[to],
      })
    );
  }
  days
    .sort((b, a) => new Date(a.date) - new Date(b.date))
    .map((day) => (day.date = formatDDMMYYYY(day.date)));

  return { days, isLoading, error, request };
};
