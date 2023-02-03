import FormWithValidation from '../form-validation';
import {
  MSG_REQUIRED_FIELD,
  MSG_WRONG_EMAIL,
  MSG_WRONG_NAME,
  MSG_WRONG_PHONE,
} from '../validation-msg';

describe('FormValidation Class', () => {
  const form = new FormWithValidation();

  test('Name validation methods', () => {
    form.name = '';
    expect(form.isValidUserName()).toBeFalsy();
    expect(form.nameValidationErrMsg).toBe(MSG_REQUIRED_FIELD);

    form.name = '12Joe';
    expect(form.isValidUserName()).toBeFalsy();
    expect(form.nameValidationErrMsg).toBe(MSG_WRONG_NAME);

    form.name = 'John Smith-Lee';
    expect(form.isValidUserName()).toBeTruthy();
    expect(form.nameValidationErrMsg).toBe('');
  });

  test('Email validation methods', () => {
    form.email = '';
    expect(form.isValidEmail()).toBeFalsy();
    expect(form.emailValidationErrMsg).toBe(MSG_REQUIRED_FIELD);

    form.email = '12Joe';
    expect(form.isValidEmail()).toBeFalsy();
    expect(form.emailValidationErrMsg).toBe(MSG_WRONG_EMAIL);

    form.email = 'some@email';
    expect(form.isValidEmail()).toBeTruthy();
    expect(form.emailValidationErrMsg).toBe('');
  });

  test('Phone validation methods', () => {
    form.phone = '';
    expect(form.isValidPhone()).toBeFalsy();
    expect(form.phoneValidationErrMsg).toBe(MSG_REQUIRED_FIELD);

    form.phone = '12Joe';
    expect(form.isValidPhone()).toBeFalsy();
    expect(form.phoneValidationErrMsg).toBe(MSG_WRONG_PHONE);

    form.phone = '+123456789012345';
    expect(form.isValidPhone()).toBeTruthy();
    expect(form.phoneValidationErrMsg).toBe('');
  });

  test('Form validation method', () => {
    form.name = 'Joo Doe';
    form.email = '12Joe@tut';
    form.phone = '+1234567890';

    expect(form.isValidForm()).toBeTruthy();
    expect(form.nameValidationErrMsg).toBe('');
    expect(form.emailValidationErrMsg).toBe('');
    expect(form.phoneValidationErrMsg).toBe('');

    form.name = 'Joo Doe';
    form.email = '12tut';
    form.phone = '+1234567890';

    expect(form.isValidForm()).toBeFalsy();
    expect(form.nameValidationErrMsg).toBe('');
    expect(form.emailValidationErrMsg).toBe(MSG_WRONG_EMAIL);
    expect(form.phoneValidationErrMsg).toBe('');
  });
});
