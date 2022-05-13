import { DeleteForever, RemoveRedEye } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import React, { useCallback, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomTable from '../../components/CustomTable/CustomTable';
import strings from '../../constants/strings';
import { RatesContext } from '../../contexts/RatesContext';
import { customStringDate } from '../../helpers/dateHelpers';
import {
  loadFromLocalStorage,
  removeFromLocalStorage,
} from '../../helpers/localStoageHelpers';
import { historyColumns } from '../../constants/tableColumns';

const HistoryPage = () => {
  const { setFrom, setTo, setAmount } = useContext(RatesContext);
  const navigate = useNavigate();

  const handleRemoveHistory = (index) => {
    setDataSource(dataSource.filter((item) => item.id !== index));
    removeFromLocalStorage(index);
  };

  const handleViewHistory = (item) => {
    setFrom(item.from);
    setTo(item.to);
    setAmount(item.amount);
    navigate('/');
  };

  const loadPreviousData = useCallback(() => {
    const prevConverts = loadFromLocalStorage();
    if (!prevConverts) {
      return [];
    }
    return prevConverts.map((history) => {
      return {
        date: customStringDate(history.date),
        event: strings.common.eventMessage
          .replace('{amount}', history.amount)
          .replace('{from}', history.from)
          .replace('{to}', history.to),
        actions: (
          <Box>
            <Button
              startIcon={<RemoveRedEye />}
              color="primary"
              onClick={() => handleViewHistory(history)}
            >
              {strings.common.view}
            </Button>
            <Button
              startIcon={<DeleteForever />}
              color="error"
              onClick={() => handleRemoveHistory(history.id)}
            >
              {strings.common.delete}
            </Button>
          </Box>
        ),
        id: history.id,
      };
    });
  }, []);

  const [dataSource, setDataSource] = useState(loadPreviousData);

  return (
    <>
      <Typography variant="h1" sx={{ marginBottom: 5 }}>
        {strings.titles.historyPage}
      </Typography>

      <CustomTable
        columns={historyColumns}
        dataSource={dataSource}
        id="historyPageTable"
        sx={{
          '& tbody tr td:last-child > div': {
            visibility: 'hidden',
          },
          '& tbody tr th:last-child > div': {
            visibility: 'hidden',
          },
          '& tbody tr:hover td:last-child > div': { visibility: 'visible' },
          '& tbody tr:hover th:last-child > div': { visibility: 'visible' },
        }}
      />
    </>
  );
};

export default HistoryPage;
