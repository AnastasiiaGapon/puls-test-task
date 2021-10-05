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
  'Approved Loans': any[],
  Requests: any[],
  'Active Loans': any[],
  'Closed Loans': any[],
  'Rejected Loans': any[],
}

const LoansTabs: React.FC = () => {
  const { loanRequests }: any = data;
  // const mobile = useMediaQuery(theme.breakpoints.down('xs'));
  // const styles = useStyles();

  // eslint-disable-next-line no-console
  console.log(loanRequests);

  const [value, setValue] = React.useState(0);
  const [tabItems, setTabItems] = React.useState<TabItem>({
    'Approved Loans': loanRequests
      .filter((loan: any) => loan.status === 'pending settlement' || loan.status === 'to be disbursed'),
    Requests: loanRequests
      .filter((loan: any) => loan.status === 'waiting approval'),
    'Active Loans': loanRequests
      .filter((loan: any) => loan.status === 'active'),
    'Closed Loans': loanRequests
      .filter((loan: any) => loan.status === 'closed'),
    'Rejected Loans': loanRequests
      .filter((loan: any) => loan.status === 'rejected'),
  });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    setTabItems({
      'Approved Loans': loanRequests
        .filter((loan: any) => loan.status === 'pending settlement' || loan.status === 'to be disbursed'),
      Requests: loanRequests
        .filter((loan: any) => loan.status === 'waiting approval'),
      'Active Loans': loanRequests
        .filter((loan: any) => loan.status === 'active'),
      'Closed Loans': loanRequests
        .filter((loan: any) => loan.status === 'closed'),
      'Rejected Loans': loanRequests
        .filter((loan: any) => loan.status === 'rejected'),
    });
  }, [loanRequests]);

  return (
    <>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label={`Approved Loans - ${tabItems['Approved Loans'].length}`}/>
        <Tab label={`Requests - ${tabItems.Requests.length}`} />
        <Tab label={`Active Loans - ${tabItems['Active Loans'].length}`}/>
        <Tab label={`Closed Loans - ${tabItems['Closed Loans'].length}`}/>
        <Tab label={`Rejected Loans - ${tabItems['Rejected Loans'].length}`} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <LoansTabsList filteredList={tabItems['Approved Loans']} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LoansTabsList filteredList={tabItems.Requests}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <LoansTabsList filteredList={tabItems['Active Loans']} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <LoansTabsList filteredList={tabItems['Closed Loans']} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <LoansTabsList filteredList={tabItems['Rejected Loans']}/>
      </TabPanel>
    </>
  );
};

export default LoansTabs;