import { Box } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import moment from 'moment';
import React, { useEffect } from 'react';
import LoansTabsList from './LoansTabsList';
// eslint-disable-next-line import/extensions
import data from '../../data/loans.json';
// import useStyles from './LoansListStyles';
// import theme from '../../theme/theme';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

interface TabItem {
  approvedLoans: any[],
  requests: any[],
  activeLoans: any[],
  closedLoans: any[],
  rejectedLoans: any[],
}

const LoansTabs: React.FC = () => {
  const { loanRequests }: any = data;
  // const mobile = useMediaQuery(theme.breakpoints.down('xs'));
  // const styles = useStyles();

  // eslint-disable-next-line no-console
  console.log(loanRequests);

  const [value, setValue] = React.useState(0);
  const [tabItems, setTabItems] = React.useState<TabItem>({
    approvedLoans: loanRequests
      .filter((loan: any) => loan.status === 'pending settlement' || loan.status === 'to be disbursed'),
    requests: loanRequests
      .filter((loan: any) => loan.status === 'waiting approval'),
    activeLoans: loanRequests
      .filter((loan: any) => loan.status === 'active'),
    closedLoans: loanRequests
      .filter((loan: any) => loan.status === 'closed'),
    rejectedLoans: loanRequests
      .filter((loan: any) => loan.status === 'rejected'),
  });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    setTabItems({
      approvedLoans: loanRequests
        .filter((loan: any) => loan.status === 'pending settlement' || loan.status === 'to be disbursed')
        .map((loan: any) => ({ ...loan, tabLabel: 'Approved Loans' })),
      requests: loanRequests
        .filter((loan: any) => loan.status === 'waiting approval')
        .map((loan: any) => ({ ...loan, tabLabel: 'Requests' })),
      activeLoans: loanRequests
        .filter((loan: any) => loan.status === 'active')
        .map((loan: any) => ({ ...loan, tabLabel: 'Active Loans' })),
      closedLoans: loanRequests
        .filter((loan: any) => loan.status === 'closed')
        .map((loan: any) => ({ ...loan, tabLabel: 'Closed Loans' })),
      rejectedLoans: loanRequests
        .filter((loan: any) => loan.status === 'rejected')
        .map((loan: any) => ({ ...loan, tabLabel: 'Rejected Loans' })),
    });
  }, [loanRequests]);

  const { approvedLoans, requests, activeLoans, closedLoans, rejectedLoans } = tabItems;
  const filteredTabs = [approvedLoans, requests, activeLoans, closedLoans, rejectedLoans]
    .filter(tab => tab.length > 0);

  return (
    <>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        {filteredTabs.map((tab: any) => (
          <Tab label={`${tab[0].tabLabel} - ${tab.length}`} key={tab.id}/>
        ))}
      </Tabs>
      {filteredTabs.map((tab: any, i: number) => (
        <TabPanel value={value} index={i} key={tab.id}>
          <LoansTabsList filteredList={tab} />
        </TabPanel>
      ))}
    </>
  );
};

export default LoansTabs;