import { Account } from './Account';

export interface Loan {
  id: number;
  externalId: string;
  amount: number;
  duration: number;
  status: string;
  monthlyPayment: number;
  account: Account;
  createdAt: string;
}
