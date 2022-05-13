import { Box } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react';
import CustomSelect from '../../../../components/CustomSelect/CustomSelect';
import strings from '../../../../constants/strings';

import { RatesContext } from '../../../../contexts/RatesContext';
import CustomRadioGroup from '../../../../components/CustomRadioGroup/CustomRadioGroup';
import CustomSparkLine from '../../../../components/CustomSparkLine/CustomSparkLine';
import TimeSeriesTables from '../TimeSeriesTables/TimeSeriesTables';

const TimeSeries = () => {
  const [range, setRange] = useState(7);
  const [dataPreview, setDataPreview] = useState('table');

  const options = [7, 14, 30];

  const { timeSeries, handleStartDateChange } = useContext(RatesContext);

  useEffect(() => {
    handleStartDateChange(range);
  }, [range]);

  return (
    <Box>
      <Box display="flex" flexDirection="row" alignItems="center">
        <CustomSelect
          id="history-duration"
          label={strings.labels.duration}
          value={range}
          onChange={setRange}
          options={options}
          sx={{ width: 100 }}
        />

        <CustomRadioGroup
          defaultValue={dataPreview}
          value={dataPreview}
          onChange={setDataPreview}
          options={[
            { label: strings.labels.table, value: 'table' },
            { label: strings.labels.chart, value: 'chart' },
          ]}
          sx={{ marginLeft: 5 }}
        />
      </Box>

      {dataPreview === 'table' ? (
        <TimeSeriesTables />
      ) : (
        <CustomSparkLine data={timeSeries} />
      )}
    </Box>
  );
};

export default TimeSeries;
