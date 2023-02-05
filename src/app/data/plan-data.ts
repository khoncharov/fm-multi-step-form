import { ADDON, MEMBERSHIP } from './plan-info';
import {
  TAdditionalService,
  TMembershipPlan,
  TPaymentPeriod,
  TPlanData,
  TUserWithValidation,
} from './types';
import { UserWithValidation } from './user';

export class PlanData implements TPlanData {
  user: TUserWithValidation = new UserWithValidation();

  plan: TMembershipPlan = MEMBERSHIP[0];

  paymentPeriod: TPaymentPeriod = 'month';

  addons: TAdditionalService[] = [ADDON[0], ADDON[1]];

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
