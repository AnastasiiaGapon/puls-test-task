import { Box, Tab, Tabs } from '@mui/material';
import React from 'react';
import { LoansByStatus, LoansTabsLabels } from '../../../types/loansTab';

interface Props {
  activeIndex: number,
  setActiveIndex: (index: number) => void,
  filteredTabs: LoansTabsLabels[],
  loansByStatus: LoansByStatus,
}

const LoansTabs: React.FC<Props> = ({ activeIndex, setActiveIndex, filteredTabs, loansByStatus }) => {
  const handleChange = (event: React.SyntheticEvent, index: number) => {
    setActiveIndex(index);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={activeIndex} onChange={handleChange} aria-label="basic tabs example">
        {filteredTabs.map((tab) => {
          const loansAmount = loansByStatus[tab].length;
          const label = `${tab} ${loansAmount}`;

          return (
            <Tab label={label} key={tab} />
          );
        })}
      </Tabs>
    </Box>
  );
};

export default LoansTabs;
