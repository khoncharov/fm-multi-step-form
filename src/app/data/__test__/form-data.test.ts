import { PlanData } from '../plan-data';

describe('Form data class', () => {
  const formData = new PlanData();

  test('Total plan cost', () => {
    formData.paymentPeriod = 'month';
    expect(formData.getTotal()).toEqual(12);
  });

  test('Total plan cost', () => {
    formData.paymentPeriod = 'year';
    expect(formData.getTotal()).toEqual(120);
  });
});
