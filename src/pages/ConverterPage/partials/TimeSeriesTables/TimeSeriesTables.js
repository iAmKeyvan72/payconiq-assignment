import { Box } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react';
import CustomTable from '../../../../components/CustomTable/CustomTable';
import strings from '../../../../constants/strings';
import {
  statisticsColumns,
  timeSeriesColumns,
} from '../../../../constants/tableColumns';
import { RatesContext } from '../../../../contexts/RatesContext';

const TimeSeriesTables = () => {
  const { timeSeries, maxRate, minRate, averageRate } =
    useContext(RatesContext);
  const [statisticsDataSource, setStatisticsDataSource] = useState([]);

  useEffect(() => {
    setStatisticsDataSource([
      { label: strings.labels.highest, value: maxRate },
      { label: strings.labels.lowest, value: minRate },
      { label: strings.labels.average, value: averageRate },
    ]);
  }, [averageRate, maxRate, minRate, timeSeries]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginY: 3,
      }}
    >
      <CustomTable
        columns={timeSeriesColumns}
        dataSource={timeSeries}
        sx={{ marginRight: { md: 3 }, marginBottom: 3 }}
      />

      <CustomTable
        columns={statisticsColumns}
        dataSource={statisticsDataSource}
      />
    </Box>
  );
};

export default TimeSeriesTables;
