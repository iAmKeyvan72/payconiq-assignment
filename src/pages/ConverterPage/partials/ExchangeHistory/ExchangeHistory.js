import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import strings from '../../../../constants/strings';
import TimeSeries from '../TimeSeries/TimeSeries';

const ExchangeHistory = () => {
  return (
    <Box>
      <Typography variant="h2" sx={{ marginY: 5 }}>
        {strings.titles.exchangeHistory}
      </Typography>
      <TimeSeries />
    </Box>
  );
};

export default ExchangeHistory;
