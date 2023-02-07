import { DEFAULT_ADDONS, DEFAULT_PLAN_INDEX } from '../const';
import { ADDON, MEMBERSHIP } from './plan-info';
import {
  TAdditionalService,
  TCurrency,
  TMembershipPlan,
  TPaymentPeriod,
  TPlanData,
  TUserWithValidation,
} from './types';
import { UserWithValidation } from './user';

export class PlanData implements TPlanData {
  user: TUserWithValidation = new UserWithValidation();

  currency: TCurrency = 'USD';

  plan: TMembershipPlan = MEMBERSHIP[DEFAULT_PLAN_INDEX];

  paymentPeriod: TPaymentPeriod = 'month';

  addons: TAdditionalService[] = [];

  constructor() {
    DEFAULT_ADDONS.forEach((index) => this.addons.push(ADDON[index]));
  }

  getTotal(): number {
    let sum = 0;

    if (this.paymentPeriod === 'month') {
      sum += this.plan.costPerMonth;

      this.addons.forEach((i) => {
        sum += i.costPerMonth;
      });
    } else if (this.paymentPeriod === 'year') {
      sum += this.plan.costPerYear;

      this.addons.forEach((i) => {
        sum += i.costPerYear;
      });
    }

    return sum;
  }
}
