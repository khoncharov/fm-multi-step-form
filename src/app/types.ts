export enum FormStep {
  STEP1 = 1,
  STEP2,
  STEP3,
  STEP4,
  STEP5,
}

/* Data types */

export interface TUser {
  name: string;
  email: string;
  phone: string;
}

export interface TUserWithValidation extends TUser {
  isValidName: () => boolean;
  isValidEmail: () => boolean;
  isValidPhone: () => boolean;
  isValidUser: () => boolean;
}

export type TPaymentPeriod = 'month' | 'year';

export type TCurrency = 'USD' | 'EUR';

export interface TMembershipPlan {
  name: string;
  description: string;
  costPerMonth: number;
  costPerYear: number;
  currency: TCurrency;
}

export interface TAdditionalService {
  name: string;
  description: string;
  costPerMonth: number;
  costPerYear: number;
  currency: TCurrency;
}

export interface TPlanData {
  user: TUserWithValidation;
  plan: TMembershipPlan;
  paymentPeriod: TPaymentPeriod;
  addons: TAdditionalService[];
  getTotal: () => number;
}
