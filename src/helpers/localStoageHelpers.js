import { v4 as uuidv4 } from 'uuid';

export const saveToLocalStorage = ({ from, to, amount }) => {
  const dateOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  };
  const date = new Date().toLocaleString('en-US', dateOptions);
  const id = uuidv4();
  let prevHistory = JSON.parse(localStorage.getItem('convertHistory')) || [];
  prevHistory.push({ id, from, to, amount, date });
  localStorage.setItem('convertHistory', JSON.stringify(prevHistory));
};

export const loadFromLocalStorage = () => {
  const value = localStorage.getItem('convertHistory');
  return value ? JSON.parse(value).reverse() : null;
};

export const removeFromLocalStorage = (id) => {
  const prevHistory = loadFromLocalStorage();
  const newHistory = prevHistory.filter((history) => history.id !== id);
  localStorage.setItem('convertHistory', JSON.stringify(newHistory));
};

export const emptyLocalStorage = () => {
  localStorage.removeItem('convertHistory');
};
