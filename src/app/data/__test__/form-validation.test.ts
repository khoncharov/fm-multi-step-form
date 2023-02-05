import {
  MSG_REQUIRED_FIELD, //
  MSG_WRONG_EMAIL,
  MSG_WRONG_NAME,
  MSG_WRONG_PHONE,
} from '../const';
import { UserWithValidation } from '../user';

describe('FormValidation Class', () => {
  const user = new UserWithValidation();

  test('Name validation methods', () => {
    user.name = '';
    expect(user.isValidName()).toBeFalsy();
    expect(user.nameValidationErrMsg).toBe(MSG_REQUIRED_FIELD);

    user.name = '12Joe';
    expect(user.isValidName()).toBeFalsy();
    expect(user.nameValidationErrMsg).toBe(MSG_WRONG_NAME);

    user.name = 'John Smith-Lee';
    expect(user.isValidName()).toBeTruthy();
    expect(user.nameValidationErrMsg).toBe('');
  });

  test('Email validation methods', () => {
    user.email = '';
    expect(user.isValidEmail()).toBeFalsy();
    expect(user.emailValidationErrMsg).toBe(MSG_REQUIRED_FIELD);

    user.email = '12Joe';
    expect(user.isValidEmail()).toBeFalsy();
    expect(user.emailValidationErrMsg).toBe(MSG_WRONG_EMAIL);

    user.email = 'some@email';
    expect(user.isValidEmail()).toBeTruthy();
    expect(user.emailValidationErrMsg).toBe('');
  });

  test('Phone validation methods', () => {
    user.phone = '';
    expect(user.isValidPhone()).toBeFalsy();
    expect(user.phoneValidationErrMsg).toBe(MSG_REQUIRED_FIELD);

    user.phone = '12Joe';
    expect(user.isValidPhone()).toBeFalsy();
    expect(user.phoneValidationErrMsg).toBe(MSG_WRONG_PHONE);

    user.phone = '+123456789012345';
    expect(user.isValidPhone()).toBeTruthy();
    expect(user.phoneValidationErrMsg).toBe('');
  });

  test('Form validation method', () => {
    user.name = 'Joo Doe';
    user.email = '12Joe@tut';
    user.phone = '+1234567890';

    expect(user.isValidUser()).toBeTruthy();
    expect(user.nameValidationErrMsg).toBe('');
    expect(user.emailValidationErrMsg).toBe('');
    expect(user.phoneValidationErrMsg).toBe('');

    user.name = 'Joo Doe';
    user.email = '12tut';
    user.phone = '+1234567890';

    expect(user.isValidUser()).toBeFalsy();
    expect(user.nameValidationErrMsg).toBe('');
    expect(user.emailValidationErrMsg).toBe(MSG_WRONG_EMAIL);
    expect(user.phoneValidationErrMsg).toBe('');
  });
});
