/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */

import { PER_MONTH, PER_YEAR } from '../const';
import {
  TAdditionalService, //
  TCurrency,
  TMembershipPlan,
  TPlanData,
} from '../data/types';

export const formatCurrency = (currency: TCurrency) =>
  new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  });

export const getItemPrice = (
  item: TMembershipPlan | TAdditionalService | number,
  data: TPlanData,
) => {
  const fn = formatCurrency(data.currency);
  if (typeof item === 'number') {
    return data.paymentPeriod === 'year'
      ? `${fn.format(item)}${PER_YEAR}`
      : `${fn.format(item)}${PER_MONTH}`;
  }

  return data.paymentPeriod === 'year'
    ? `${fn.format(item.costPerYear)}${PER_YEAR}`
    : `${fn.format(item.costPerMonth)}${PER_MONTH}`;
};
