import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import LoansList from './Loans/LoansList';
import theme from '../theme/theme';
import Header from './Header/Header';
import Main from './Main/Main';

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Header />
        <Main>
          <LoansList />
        </Main>
      </ThemeProvider>
    </>
  );
}

export default App;
