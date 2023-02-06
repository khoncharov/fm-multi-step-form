/* eslint-disable implicit-arrow-linebreak */

export const formatCurrency = (currency: string) =>
  new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  });
