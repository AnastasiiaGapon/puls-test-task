import { Loan } from './loans';

export enum LoansTabsLabels {
  Active = 'Active Loans',
  Approved = 'Approved Loans',
  Closed = 'Closed Loans',
  Rejected = 'Rejected Loans',
  Request = 'Requests',
}

export type LoansByStatus = Record<LoansTabsLabels, Loan[]>;
