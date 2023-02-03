import {
  formatEmail,
  formatPhone,
  formatUsername,
  isEmptyField, //
  isInvalidEmail,
  isInvalidName,
  isInvalidPhone,
} from '../validation-utils';

describe('Form validation rules', () => {
  test('Empty string', () => {
    expect(isEmptyField('')).toBeTruthy();
  });

  test('Not empty string', () => {
    expect(isEmptyField('q')).toBeFalsy();
    expect(isEmptyField('q111111111')).toBeFalsy();
  });

  test('Valid name', () => {
    expect(isInvalidName('some-Valid nAme')).toBeFalsy();
    expect(isInvalidName('some-ValidNAme')).toBeFalsy();
    expect(isInvalidName('someValidNAme')).toBeFalsy();
    expect(isInvalidName('someValidNAme')).toBeFalsy();
  });

  test('Invalid name', () => {
    expect(isInvalidName('1name')).toBeTruthy();
    expect(isInvalidName('name!')).toBeTruthy();
    expect(isInvalidName('name@')).toBeTruthy();
    expect(isInvalidName('name#')).toBeTruthy();
    expect(isInvalidName('name%')).toBeTruthy();
    expect(isInvalidName('name*')).toBeTruthy();
    expect(isInvalidName('name(')).toBeTruthy();
    expect(isInvalidName('name)')).toBeTruthy();
    expect(isInvalidName('name_')).toBeTruthy();
    expect(isInvalidName('name+')).toBeTruthy();
    expect(isInvalidName('name=')).toBeTruthy();
    expect(isInvalidName('name[')).toBeTruthy();
    expect(isInvalidName('name]')).toBeTruthy();
    expect(isInvalidName('name.')).toBeTruthy();
    expect(isInvalidName('name,')).toBeTruthy();
    expect(isInvalidName('name?')).toBeTruthy();
    expect(isInvalidName('name|')).toBeTruthy();
    expect(isInvalidName('name\\')).toBeTruthy();
    expect(isInvalidName('name/')).toBeTruthy();
    expect(isInvalidName("name'")).toBeTruthy();
    expect(isInvalidName('name"')).toBeTruthy();
    expect(isInvalidName('name;')).toBeTruthy();
    expect(isInvalidName('name:')).toBeTruthy();
    expect(isInvalidName('name№')).toBeTruthy();
    expect(isInvalidName('name`')).toBeTruthy();
    expect(isInvalidName('name~')).toBeTruthy();
  });

  test('Valid email', () => {
    expect(isInvalidEmail('some-Valid@email.address')).toBeFalsy();
    expect(isInvalidEmail('valid@email')).toBeFalsy();
    expect(isInvalidEmail('some-Valid@email.address')).toBeFalsy();
  });

  test('Invalid email', () => {
    expect(isInvalidEmail('@ess')).toBeTruthy();
    expect(isInvalidEmail('a12dqw@')).toBeTruthy();
    expect(isInvalidEmail('invalidEmail')).toBeTruthy();
    expect(isInvalidEmail('invalid@Email@address')).toBeTruthy();
  });

  test('Valid phone', () => {
    expect(isInvalidPhone('+1234567890')).toBeFalsy();
    expect(isInvalidPhone('+1234567890000000000')).toBeFalsy();
  });

  test('Invalid phone', () => {
    expect(isInvalidPhone('+')).toBeTruthy();
    expect(isInvalidPhone('+++++++++++++++++')).toBeTruthy();
    expect(isInvalidPhone('+1222222f2222222')).toBeTruthy();
    expect(isInvalidPhone('+1222222#2222222')).toBeTruthy();
    expect(isInvalidPhone('+1')).toBeTruthy();
    expect(isInvalidPhone('+123456789')).toBeTruthy();
    expect(isInvalidPhone('1234567890000000')).toBeTruthy();
  });
});

describe('User fields format', () => {
  test('Username format', () => {
    expect(formatUsername('  some   user --- name  ')).toBe('some user-name');
  });

  test('User email format', () => {
    expect(formatEmail('  some@userEmail  ')).toBe('some@userEmail');
  });

  test('User phone format', () => {
    expect(formatPhone('  + 12 3  4 56    789 ')).toBe('+123456789');
  });
});
