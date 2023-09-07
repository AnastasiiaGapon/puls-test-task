import { Typography } from '@mui/material';
import React from 'react';
// eslint-disable-next-line import/extensions
import data from '../../data/loans.json';
import LoansTabs from './LoansTabs/LoansTabs';
import { EMPTY_LOAN_TEXT, LOAN_STATUS_TABS } from './LoansTabs/constants';
import { getLoansByStatus } from './LoansTabs/helpers';
import LoansList from './LoansList/LoansList';

const Loans: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const { loanRequests }: any = data;
  const loansByStatus = getLoansByStatus(loanRequests);
  
  const filteredTabs = LOAN_STATUS_TABS.filter((status) => loansByStatus[status]);
  const activeStatus = filteredTabs[activeIndex];


  if (!filteredTabs.length) {
    return <p>{EMPTY_LOAN_TEXT}</p>;
  }

  return (
    <>
      <Typography variant="h2" sx={{ marginBottom: 8 }}>Financing</Typography>

      <LoansTabs
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        filteredTabs={filteredTabs}
        loansByStatus={loansByStatus}
      />
      <LoansList loans={loansByStatus[activeStatus]} />
    </>
  );
};

export default Loans;
