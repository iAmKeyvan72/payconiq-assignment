import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#009688',
    },
    secondary: {
      main: '#94C720',
    },
    warning: {
      main: '#C70D38',
    },
    text: {
      primary: '#404040',
    },
    background: {
      default: '#F2F2F2',
      paper: '#fff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 'bold',
      fontSize: 48,
      color: '#404040',
    },
    h2: {
      fontWeight: 'bold',
      fontSize: 24,
      color: '#404040',
    },
    h3: {
      fontWeight: 'normal',
      fontSize: 48,
      color: '#404040',
    },
    body2: {
      fontSize: 16,
      fontWeight: 'normal',
      color: '#404040',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
