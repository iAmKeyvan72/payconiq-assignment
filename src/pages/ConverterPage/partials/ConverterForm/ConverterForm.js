import React, { useContext, useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';

import strings from '../../../../constants/strings';
import FromToSwitch from '../FromToSwitch/FromToSwitch';
import {
  RatesContext,
  SymbolsContextProvider,
} from '../../../../contexts/RatesContext';
import { saveToLocalStorage } from '../../../../helpers/localStoageHelpers';

const ConverterForm = () => {
  const { from, setFrom, to, setTo, amount, setAmount, error } =
    useContext(RatesContext);

  const [localAmount, setLocalAmount] = useState(amount);
  const [localFrom, setLocalFrom] = useState(from);
  const [localTo, setLocalTo] = useState(to);

  const handleSubmit = () => {
    setAmount(localAmount);
    setFrom(localFrom);
    setTo(localTo);
    saveToLocalStorage({ from: localFrom, to: localTo, amount: localAmount });
  };

  const handleAmountChange = (event) => {
    const amount = event.target.value > 0 ? event.target.value : '';
    setLocalAmount(amount);
  };

  const isValid = () =>
    localAmount > 0 && localTo && localFrom ? false : true;

  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& .MuiTextField-root': { m: 1, width: { xs: '100%', md: '25%' } },
        '& .MuiButton-root': { m: 1 },
      }}
    >
      <TextField
        id="amount"
        label={strings.labels.amount}
        variant="standard"
        type="number"
        value={localAmount}
        onChange={handleAmountChange}
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
      />

      <SymbolsContextProvider>
        <FromToSwitch
          from={localFrom}
          setFrom={setLocalFrom}
          to={localTo}
          setTo={setLocalTo}
        />
      </SymbolsContextProvider>

      <Button
        disabled={isValid()}
        onClick={handleSubmit}
        sx={{ maxWidth: 100 }}
        variant="contained"
      >
        {strings.common.convert}
      </Button>
    </Box>
  );
};

export default ConverterForm;
