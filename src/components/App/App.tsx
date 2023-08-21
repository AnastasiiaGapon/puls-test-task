import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../../theme/theme';
import Header from '../Header/Header';
import Main from '../Main/Main';
import LoansList from '../Loans/LoansList';

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
