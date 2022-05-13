import React, { useContext } from 'react';
import { CompareArrows } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import CustomSelect from '../../../../components/CustomSelect/CustomSelect';
import strings from '../../../../constants/strings';
import { SymbolsContext } from '../../../../contexts/RatesContext';

const FromToSwitch = ({ from, setFrom, to, setTo }) => {
  const { symbols, isLoading, error } = useContext(SymbolsContext);

  const handleSwitchCurrencies = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  if (isLoading) return <Box>Loading...</Box>;

  if (error) return <Box>Something bad happened</Box>;

  return (
    <>
      <CustomSelect
        value={from}
        onChange={setFrom}
        id="from-select"
        label={strings.labels.from}
        options={symbols}
      />
      <IconButton
        aria-label={strings.labels.switch}
        onClick={handleSwitchCurrencies}
        size="large"
        variant="filled"
      >
        <CompareArrows />
      </IconButton>
      <CustomSelect
        value={to}
        onChange={setTo}
        id="to-select"
        label={strings.labels.to}
        options={symbols}
      />
    </>
  );
};

export default FromToSwitch;
