import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import LoansTabs from './Loans/LoansTabs';
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
          <LoansTabs />
        </Main>
      </ThemeProvider>
    </>
  );
}

export default App;
