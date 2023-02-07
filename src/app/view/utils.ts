/* eslint-disable implicit-arrow-linebreak */

import { TPlanData } from '../data/types';

export const formatCurrency = (data: TPlanData) =>
  new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: data.currency,
    maximumFractionDigits: 0,
  });
