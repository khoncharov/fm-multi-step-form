import FormDataClass from '../form-data';

describe('Form data class', () => {
  const formData = new FormDataClass();
  // eslint-disable-next-line prefer-destructuring

  test('Total plan cost', () => {
    formData.paymentPeriod = 'month';
    expect(formData.getTotal()).toEqual(12);
  });

  test('Total plan cost', () => {
    formData.paymentPeriod = 'year';
    expect(formData.getTotal()).toEqual(120);
  });
});
