import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { RatesContextProvider } from './contexts/RatesContext';

import ConverterPage from './pages/ConverterPage/ConverterPage';
import HistoryPage from './pages/HistoryPage/HistoryPage';
import Layout from './pages/Layout/Layout';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RatesContextProvider>
            <Layout />
          </RatesContextProvider>
        }
      >
        <Route index element={<ConverterPage />} />
        <Route path="history" element={<HistoryPage />} />
      </Route>
    </Routes>
  );
}

export default App;
