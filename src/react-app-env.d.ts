/// <reference types="react-scripts" />

interface Company {
  name: string;
}

interface Account {
  company: Company;
}

interface Loan {
  id: number;
  externalId: string;
  amount: number;
  duration: number;
  status: string;
  monthlyPayment: number;
  account: Account;
  createdAt: string;
  tabLabel?: string;
}

interface LoanRequest {
  loanRequests: Loan[];
}
