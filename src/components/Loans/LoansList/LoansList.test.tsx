import React from 'react';
import { render } from '@testing-library/react';
import LoansList from './LoansList';
import { Loan, Statuses } from '../../../types/loans';
import { ThemeProvider } from '@mui/styles';
import theme from '../../../theme/theme';

const mockLoans = [
  {
    id: 1,
    externalId: 'G81FV',
    duration: 12,
    amount: 10000,
    status: Statuses.Active,
    createdAt: '2021-09-14T13:59:52.895Z',
    monthlyPayment: 1000,
    interestRate: 10,
    externalProductId: 10,
    account: {
      company: {
        name: 'Nancy Logan',
      },
    },
  },
];

test('renders loans list', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <LoansList loans={mockLoans as Loan[]} />
    </ThemeProvider>,
  );
  
  expect(getByText('G81FV')).toBeInTheDocument();
  expect(getByText('10.000,00 €')).toBeInTheDocument();
  expect(getByText('1.000,00€ / month')).toBeInTheDocument();
  expect(getByText('Nancy Logan')).toBeInTheDocument();
});
