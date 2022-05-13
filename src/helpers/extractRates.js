const extractRates = (obj) => {
  return Object.values(obj).map((date) => parseFloat(date.rate));
};

export default extractRates;
