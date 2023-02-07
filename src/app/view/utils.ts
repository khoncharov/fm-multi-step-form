import { PER_MONTH, PER_YEAR } from '../const';
import { TAdditionalService, TMembershipPlan, TPlanData } from '../data/types';

export const getItemPrice = (
  item: TMembershipPlan | TAdditionalService | number,
  data: TPlanData,
) => {
  const fn = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: data.currency,
    maximumFractionDigits: 0,
  });

  if (typeof item === 'number') {
    return data.paymentPeriod === 'year'
      ? `${fn.format(item)}${PER_YEAR}`
      : `${fn.format(item)}${PER_MONTH}`;
  }

  return data.paymentPeriod === 'year'
    ? `${fn.format(item.costPerYear)}${PER_YEAR}`
    : `${fn.format(item.costPerMonth)}${PER_MONTH}`;
};
