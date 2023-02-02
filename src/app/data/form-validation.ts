import FormDataClass from './form-data';

export default class FormValidation extends FormDataClass {
  nameValidationErrMsg: string = '';

  emailValidationErrMsg: string = '';

  phoneValidationErrMsg: string = '';

  isValidUserName(): boolean {
    return true;
  }

  isValidEmail(): boolean {
    return true;
  }

  isValidPhone(): boolean {
    return true;
  }

  isValidUser(): boolean {
    const result = this.isValidUserName() && this.isValidEmail() && this.isValidPhone();
    return result;
  }
}
