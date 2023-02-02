import { addon, plan } from './plan-info';
import {
  AdditionalService, //
  MembershipPlan,
  PaymentPeriod,
  PlanDataType,
} from '../types';

export default class FormDataClass implements PlanDataType {
  name: string = '';

  email: string = '';

  phone: string = '';

  plan: MembershipPlan = plan[0];

  paymentPeriod: PaymentPeriod = 'month';

  addons: AdditionalService[] = [addon[0], addon[1]];

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
