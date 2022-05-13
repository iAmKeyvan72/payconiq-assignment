import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import logo from '../../assets/images/logo.png';

import strings from '../../constants/strings';
import TabNavigation from './partials/TabNavigations/TabNavigations';
import { emptyLocalStorage } from '../../helpers/localStoageHelpers';
import { useNavigate } from 'react-router-dom';

const TopNavigationBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    emptyLocalStorage();
    navigate('/');
  };

  return (
    <AppBar position="static" sx={{ bgcolor: '#fff', paddingBottom: 0 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} height={25} alt="PayConiq Test" />

          <Box
            sx={{
              flexGrow: 1,
              marginLeft: 2,
              display: { md: 'flex' },
            }}
          >
            <TabNavigation />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button onClick={handleLogout}>{strings.common.logout}</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default TopNavigationBar;
