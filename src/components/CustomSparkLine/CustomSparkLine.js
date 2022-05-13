import { Box } from '@mui/system';
import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const CustomSparkLine = ({ data }) => {
  const validDate = data.map((date) => date.rate);

  return (
    <Box sx={{ marginY: 10 }}>
      {data.length > 0 ? (
        <Sparklines data={validDate}>
          <SparklinesLine color="#009688" />
        </Sparklines>
      ) : (
        'Loading...'
      )}
    </Box>
  );
};

export default CustomSparkLine;
