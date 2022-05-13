import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.exchangerate.host/',
});

export const getSupportedSymbols = async () => {
  try {
    const response = await client.get('symbols');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getExchangeRate = async (from, to, amount) => {
  try {
    const response = await client.get(
      `convert?from=${from}&to=${to}&amount=${amount}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTimeSeries = async (from, to, start_date, end_date) => {
  try {
    const response = await client.get(
      `timeseries?&start_date=${start_date}&end_date=${end_date}&base=${from}&symbols=${to}`
    );
    return response.data.rates;
  } catch (error) {
    throw error;
  }
};
