import React from 'react';
import { render } from '@testing-library/react';
import LoansTabs from './LoansTabs';
import { LoansByStatus, LoansTabsLabels } from '../../../types/loansTab';
import { Loan } from '../../../types/loans';

const mockProps = {
  activeIndex: 0,
  setActiveIndex: jest.fn(),
  filteredTabs: [LoansTabsLabels.Active, LoansTabsLabels.Approved],
  loansByStatus: {
    [LoansTabsLabels.Active]: [] as Loan[],
    [LoansTabsLabels.Approved]: [] as Loan[],
  } as LoansByStatus,
};

test('renders tabs based on filteredTabs prop', () => {
  const { getAllByRole } = render(<LoansTabs {...mockProps} />);

  const tabs = getAllByRole('tab');
  expect(tabs).toHaveLength(mockProps.filteredTabs.length);

  mockProps.filteredTabs.forEach((tab, index) => {
    expect(tabs[index]).toHaveTextContent(`${tab} 0`);
  });
});