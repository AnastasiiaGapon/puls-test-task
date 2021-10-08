import { Typography, Box, tabsClasses, Tabs, Tab } from '@mui/material';
import React from 'react';
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

function listChanger(list: Loan[], filterBy: string[], tabName: string) {
  return list
    .filter((listItem: Loan) => filterBy.includes(listItem.status))
    .map((listItem: Loan) => ({ ...listItem, tabLabel: tabName }));
}

const LoansTabs: React.FC = () => {
  const { loanRequests }: any = data;

  const [value, setValue] = React.useState(0);

  const [tabItems] = React.useState<TabItem>({
    approvedLoans: listChanger(loanRequests, ['pending settlement', 'to be disbursed'], 'Approved Loans'),
    requests: listChanger(loanRequests, ['waiting approval'], 'Requests'),
    activeLoans: listChanger(loanRequests, ['active'], 'Active Loans'),
    closedLoans: listChanger(loanRequests, ['closed'], 'Closed Loans'),
    rejectedLoans: listChanger(loanRequests, ['rejected'], 'Rejected Loans'),
  });


  const { approvedLoans, requests, activeLoans, closedLoans, rejectedLoans } = tabItems;
  const filteredTabs: Loan[][] = [approvedLoans, requests, activeLoans, closedLoans, rejectedLoans]
    .filter(tab => tab.length > 0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  
  if (!loanRequests.length) {
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