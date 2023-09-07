export interface Loan {
  id: number,
  externalId: string;
  status: Statuses;
  createdAt: string;
  duration: number;
  amount: number;
  monthlyPayment: number,
  interestRate: number,
  externalProductId: number,
  account?: Account,
}

interface Account {
  id: number,
  providerId: string
  accountNumber: string,
  iban: string,
  currency: string,
  type: string,
  holder: string,
  holderType: string,
  isCompanyPublished: boolean,
  createdAt: string,
  loanLimit: number,
  company: Company,
}

interface Company {
  id: number,
  legalForm: string,
  name: string,
  registrationNumber: string,
  registrationDistrict: string,
  registrationDate: string,
  country: string,
  street: string,
  state: string,
  postcode: string,
  city: string,
  isDataComplete: boolean,
  employees: Employees,
}

interface Employees {
  id: number,
  name: string,
  roleName: string,
}

export enum Statuses {
  Active = 'active',
  Closed = 'closed',
  Disbursed = 'to be disbursed',
  Pending = 'pending settlement',
  Rejected = 'rejected',
  WaitingApproval = 'waiting approval',
}
