import { Typography, Box, tabsClasses, Tabs, Tab } from '@mui/material';
import React, { useEffect } from 'react';
import LoansTabsList from './LoansTabsList';
import TabPanel from './TabPanel';
// eslint-disable-next-line import/extensions
import data from '../../data/loans.json';

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
  const [tabItems, setTabItems] = React.useState<TabItem>({
    approvedLoans: loanRequests
      .filter((loan: Loan) => loan.status === 'pending settlement' || loan.status === 'to be disbursed'),
    requests: loanRequests
      .filter((loan: Loan) => loan.status === 'waiting approval'),
    activeLoans: loanRequests
      .filter((loan: Loan) => loan.status === 'active'),
    closedLoans: loanRequests
      .filter((loan: Loan) => loan.status === 'closed'),
    rejectedLoans: loanRequests
      .filter((loan: Loan) => loan.status === 'rejected'),
  });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    setTabItems(latestState => ({
      approvedLoans: latestState.approvedLoans
        .map((loan: Loan) => ({ ...loan, tabLabel: 'Approved Loans' })),
      requests: latestState.requests
        .map((loan: Loan) => ({ ...loan, tabLabel: 'Requests' })),
      activeLoans: latestState.activeLoans
        .map((loan: Loan) => ({ ...loan, tabLabel: 'Active Loans' })),
      closedLoans: latestState.closedLoans
        .map((loan: Loan) => ({ ...loan, tabLabel: 'Closed Loans' })),
      rejectedLoans: latestState.rejectedLoans
        .map((loan: Loan) => ({ ...loan, tabLabel: 'Rejected Loans' })),
    }));
  }, []);

  const { approvedLoans, requests, activeLoans, closedLoans, rejectedLoans } = tabItems;
  const filteredTabs: Loan[][] = [approvedLoans, requests, activeLoans, closedLoans, rejectedLoans]
    .filter(tab => tab.length > 0);

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
          {filteredTabs.map((tab: Loan[]) => (
            <Tab label={`${tab[0].tabLabel} - ${tab.length}`} key={tab[0].id} />
          ))}
        </Tabs>
        {filteredTabs.map((tab: Loan[], i: number) => (
          <TabPanel value={value} index={i} key={tab[0].id}>
            <LoansTabsList filteredList={tab} />
          </TabPanel>
        ))}
      </Box>
    </>
  );
};

export default LoansTabs;