import { Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNavigationBar from '../../components/TopNavigationBar/TopNavigationBar';

const Layout = () => {
  return (
    <>
      <TopNavigationBar />
      <Container sx={{ marginY: 5 }}>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
