import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link, useLocation } from 'react-router-dom';

import strings from '../../../../constants/strings';

const TabNavigation = () => {
  const { pathname } = useLocation();
  return (
    <Tabs value={pathname}>
      <Tab label={strings.pages.converter} value="/" to="/" component={Link} />
      <Tab
        label={strings.pages.history}
        value="/history"
        to="/history"
        component={Link}
      />
    </Tabs>
  );
};

export default TabNavigation;
