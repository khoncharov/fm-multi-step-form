import { addon, plan } from './plan-info';
import {
  AdditionalService, //
  MembershipPlan,
  PaymentPeriod,
  PlanDataType,
} from './types';

export default class FormDataClass implements PlanDataType {
  name: string = '';

  email: string = '';

  phone: string = '';

  plan: MembershipPlan = plan[0];

  paymentPeriod: PaymentPeriod = 'month';

  addons: AdditionalService[] = [addon[0], addon[1]];

  // getTotal(): string {
  //   return '';
  // }
}
