export enum FormStep {
  STEP1 = 1,
  STEP2,
  STEP3,
  STEP4,
  STEP5,
}

export type PaymentPeriod = 'month' | 'year';

export type Currency = 'USD' | 'EUR';

export interface MembershipPlan {
  name: string;
  description: string;
  costPerMonth: number;
  costPerYear: number;
  currency: Currency;
}

export interface AdditionalService {
  name: string;
  description: string;
  costPerMonth: number;
  costPerYear: number;
  currency: Currency;
}

export interface User {
  name: string;
  email: string;
  phone: string;
}

export interface PlanDataType extends User {
  plan: MembershipPlan;
  paymentPeriod: PaymentPeriod;
  addons: AdditionalService[];
  getTotal: () => number;
}
