import { Statuses } from '../../../types/loans';
import { LoansTabsLabels } from '../../../types/loansTab';

export const EMPTY_LOAN_TEXT = 'There&#39;s nothing to show here';

export const LOAN_STATUSES = {
  [Statuses.Active]: LoansTabsLabels.Active,
  [Statuses.Closed]: LoansTabsLabels.Closed,
  [Statuses.Rejected]: LoansTabsLabels.Rejected,
  [Statuses.Pending]: LoansTabsLabels.Approved,
  [Statuses.Disbursed]: LoansTabsLabels.Approved,
  [Statuses.WaitingApproval]: LoansTabsLabels.Request,
};

export const LOAN_STATUS_TABS = [
  LoansTabsLabels.Approved,
  LoansTabsLabels.Request,
  LoansTabsLabels.Active,
  LoansTabsLabels.Closed,
  LoansTabsLabels.Rejected,
];