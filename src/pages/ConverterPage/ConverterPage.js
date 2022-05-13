import { Typography } from '@mui/material';
import React, { useContext } from 'react';
import strings from '../../constants/strings';
import Divider from '@mui/material/Divider';
import { RatesContext } from '../../contexts/RatesContext';

import ConverterForm from './partials/ConverterForm/ConverterForm';
import ExchangeHistory from './partials/ExchangeHistory/ExchangeHistory';
import ResultBox from './partials/ResultBox/ResultBox';

const ConverterPage = () => {
  const { from } = useContext(RatesContext);

  return (
    <>
      <Typography variant="h1" sx={{ marginBottom: 5 }}>
        {strings.titles.converterPage}
      </Typography>
      <ConverterForm />
      {from && <ResultBox />}
      {from && <Divider />}
      {from && <ExchangeHistory />}
    </>
  );
};

export default ConverterPage;
