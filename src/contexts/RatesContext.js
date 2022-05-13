import { createContext, useEffect, useState } from 'react';
import {
  useExchangeRate,
  useSupportedSymbols,
  useTimeSeries,
} from '../hooks/useExchange';
import changeRate from '../helpers/changeRate';
import { subDay } from '../helpers/dateHelpers';
import calcAverage from '../helpers/calcAverage';
import extractRates from '../helpers/extractRates';

export const SymbolsContext = createContext();
export const SymbolsContextProvider = ({ children }) => {
  const { symbols, isLoading, error } = useSupportedSymbols();

  return (
    <SymbolsContext.Provider value={{ symbols, isLoading, error }}>
      {children}
    </SymbolsContext.Provider>
  );
};

export const RatesContext = createContext();
export const RatesContextProvider = ({ children }) => {
  const [from, setFrom] = useState('EUR');
  const [to, setTo] = useState('USD');
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(0);
  const [rate, setRate] = useState(0);
  const [reverseRate, setReverseRate] = useState(0);
  const [startDate, setStartDate] = useState();
  const [minRate, setMinRate] = useState(0);
  const [maxRate, setMaxRate] = useState(0);
  const [averageRate, setAverageRate] = useState(0);

  const today = new Date().toISOString().split('T')[0];

  const {
    data: exchangeRates,
    isLoading: isLoadingExchangeRates,
    error: exchangeRatesError,
    request: exchangeRatesRequest,
  } = useExchangeRate(from, to, amount);

  const {
    days: timeSeries,
    isLoading: isLoadingTimeSeries,
    error: errorTimeSeries,
    request: requestTimeSeries,
  } = useTimeSeries(from, to, startDate, today);

  const handleStartDateChange = (date) => {
    setStartDate(subDay(date));
  };

  useEffect(() => {
    setResult(exchangeRates?.result);
    setRate(exchangeRates?.info.rate);
    setReverseRate(changeRate(exchangeRates?.info.rate));
  }, [exchangeRates, isLoadingExchangeRates]);

  useEffect(() => {
    if (from && to && amount) {
      exchangeRatesRequest();
    }
  }, [from, to, amount]);

  useEffect(() => {
    if (startDate) {
      requestTimeSeries();
    }
  }, [startDate, from, to]);

  useEffect(() => {
    const rates = extractRates(timeSeries);
    if (rates.length > 0) {
      const min = Math.min(...rates);
      const max = Math.max(...rates);
      const average = calcAverage(rates);
      setMinRate(min);
      setMaxRate(max);
      setAverageRate(average);
    }
  }, [timeSeries]);

  const provider = {
    from,
    setFrom,
    to,
    setTo,
    amount,
    setAmount,
    result,
    rate,
    reverseRate,
    isLoadingExchangeRates,
    exchangeRatesError,
    timeSeries,
    isLoadingTimeSeries,
    errorTimeSeries,
    handleStartDateChange,
    minRate,
    maxRate,
    averageRate,
  };

  return (
    <RatesContext.Provider value={provider}>{children}</RatesContext.Provider>
  );
};
