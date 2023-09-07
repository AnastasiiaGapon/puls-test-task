import { LOAN_STATUSES } from './constants';
import { Loan, Statuses } from '../../../types/loans';
import { LoansByStatus, LoansTabsLabels } from '../../../types/loansTab';

export const getLoansByStatus = (loans: Loan[]) =>
  loans.reduce((acc: LoansByStatus, item: { status: Statuses; }) => {
    const loanStatus = LOAN_STATUSES[item.status] as LoansTabsLabels;
    const itemsByStatus = acc[loanStatus];

    return { ...acc, [loanStatus]: itemsByStatus ? [...itemsByStatus, item] : [item] };
  }, {} as LoansByStatus);
