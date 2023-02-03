import Data from './data';
import {
  MSG_REQUIRED_FIELD, //
  MSG_WRONG_EMAIL,
  MSG_WRONG_NAME,
  MSG_WRONG_PHONE,
} from './const';
import {
  isEmptyField, //
  isInvalidEmail,
  isInvalidName,
  isInvalidPhone,
} from './utils';

export default class DataWithValidation extends Data {
  nameValidationErrMsg: string = '';

  emailValidationErrMsg: string = '';

  phoneValidationErrMsg: string = '';

  isValidUserName(): boolean {
    if (isEmptyField(this.name)) {
      this.nameValidationErrMsg = MSG_REQUIRED_FIELD;
      return false;
    }

    if (isInvalidName(this.name)) {
      this.nameValidationErrMsg = MSG_WRONG_NAME;
      return false;
    }

    this.nameValidationErrMsg = '';
    return true;
  }

  isValidEmail(): boolean {
    if (isEmptyField(this.email)) {
      this.emailValidationErrMsg = MSG_REQUIRED_FIELD;
      return false;
    }

    if (isInvalidEmail(this.email)) {
      this.emailValidationErrMsg = MSG_WRONG_EMAIL;
      return false;
    }

    this.emailValidationErrMsg = '';
    return true;
  }

  isValidPhone(): boolean {
    if (isEmptyField(this.phone)) {
      this.phoneValidationErrMsg = MSG_REQUIRED_FIELD;
      return false;
    }

    if (isInvalidPhone(this.phone)) {
      this.phoneValidationErrMsg = MSG_WRONG_PHONE;
      return false;
    }

    this.phoneValidationErrMsg = '';
    return true;
  }

  isValidForm(): boolean {
    const result = this.isValidUserName() && this.isValidEmail() && this.isValidPhone();
    return result;
  }
}
