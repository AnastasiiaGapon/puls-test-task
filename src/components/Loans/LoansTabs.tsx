import { Typography, Box, tabsClasses, Tabs, Tab } from '@mui/material';
import React from 'react';
import LoansTabsList from './TabLoansList';
import TabPanel from './TabPanel';
// eslint-disable-next-line import/extensions
import data from '../../data/loans.json';
import { Loan } from '../../types/Loan';

interface TabItem {
  approvedLoans: Loan[],
  requests: Loan[],
  activeLoans: Loan[],
  closedLoans: Loan[],
  rejectedLoans: Loan[],
}

const LoansTabs: React.FC = () => {
  const { loanRequests }: any = data;

  const [value, setValue] = React.useState(0);

  loanRequests.reduce((acc: TabItem, loanRequest: Loan) => {
    switch (loanRequest.status) {
      case 'pending settlement':
      case 'to be disbursed':
        acc.approvedLoans.push(loanRequest);
        break;
      case 'waiting approval':
        acc.requests.push(loanRequest);
        break;
      case 'active':
        acc.activeLoans.push(loanRequest);
        break;
      case 'closed':
        acc.closedLoans.push(loanRequest);
        break;
      case 'rejected':
        acc.rejectedLoans.push(loanRequest);
        break;
    }
    return acc;
  }, {
    approvedLoans: [],
    requests: [],
    activeLoans: [],
    closedLoans: [],
    rejectedLoans: [],
  } as TabItem);
  
  const tabs: { label: string, loans: Loan[] }[] = [
    { label: 'Approved Loans', loans: [] },
    { label: 'Requests', loans: [] },
    { label: 'Active Loans', loans: [] },
    { label: 'Closed Loans', loans: [] },
    { label: 'Rejected Loans', loans: [] },
  ];

  loanRequests.forEach((loan: Loan) => {
    switch (loan.status) {
      case 'pending settlement':
      case 'to be disbursed':
        tabs[0].loans.push(loan);
        break;
      case 'waiting approval':
        tabs[1].loans.push(loan);
        break;
      case 'active':
        tabs[2].loans.push(loan);
        break;
      case 'closed':
        tabs[3].loans.push(loan);
        break;
      case 'rejected':
        tabs[4].loans.push(loan);
        break;
    }
  });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  
  if (!loanRequests.length || loanRequests.length === 0) {
    return (
      <p>No data found...</p>
    );
  }

  return (
    <>
      <Typography variant="h2" sx={{ marginBottom: 8 }}>Financing</Typography>
      <Box sx={{ maxWidth: 800, bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="scrollable" scrollButtons allowScrollButtonsMobile 
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              '&.Mui-disabled': { opacity: 0.3 },
            },
          }}
        >
          {tabs
            .filter(tab => tab.loans.length > 0)
            .map(tab => <Tab label={`${tab.label} - ${tab.loans.length}`} key={tab.label} />)
          }
        </Tabs>
        {tabs.map((tab, i) => (
          <TabPanel value={value} index={i} key={tab.label}>
            <LoansTabsList tabLoansList={tab.loans} />
          </TabPanel>
        ))}
      </Box>
    </>
  );
};

export default LoansTabs;