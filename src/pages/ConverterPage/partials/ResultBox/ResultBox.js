import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { RatesContext } from '../../../../contexts/RatesContext';

const ResultBox = () => {
  const { amount, from, to, result, rate, reverseRate, isLoading } =
    useContext(RatesContext);

  if (isLoading) return <Box>Loading</Box>;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        paddingY: 6,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          textAlign: 'center',
          paddingBottom: 3,
        }}
      >
        <Typography variant="h3" component="p">
          {amount} {from} ={' '}
        </Typography>{' '}
        <Typography variant="h3" component="p" color="secondary.main">
          {result} {to}
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2">
          1 {from} = {rate} {to}
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2">
          1 {to} = {reverseRate} {from}
        </Typography>
      </Box>
    </Box>
  );
};

export default ResultBox;
