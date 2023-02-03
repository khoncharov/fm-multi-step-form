/* eslint-disable no-param-reassign */
import FormWithValidation from '../data/form-validation';
import { formatEmail, formatPhone, formatUsername } from '../data/validation-utils';
import { INVALID_FIELD_CLASS } from '../const';

export default class FormView {
  inputName = document.querySelector('#form-input-name') as HTMLInputElement;

  inputEmail = document.querySelector('#form-input-email') as HTMLInputElement;

  inputPhone = document.querySelector('#form-input-tel') as HTMLInputElement;

  inputNameErr = document.querySelector('#form-input-name-err') as HTMLInputElement;

  inputEmailErr = document.querySelector('#form-input-email-err') as HTMLInputElement;

  inputPhoneErr = document.querySelector('#form-input-tel-err') as HTMLInputElement;

  updateUsernameField(data: FormWithValidation): void {
    data.name = formatUsername(this.inputName.value);
    this.inputName.value = data.name;

    if (data.isValidUserName()) {
      this.inputName.classList.remove(INVALID_FIELD_CLASS);
      this.inputName.setAttribute('aria-invalid', 'false');
      this.inputNameErr.textContent = '';
    } else {
      this.inputName.classList.add(INVALID_FIELD_CLASS);
      this.inputName.setAttribute('aria-invalid', 'true');
      this.inputNameErr.textContent = data.nameValidationErrMsg;
    }
  }

  updateEmailField(data: FormWithValidation): void {
    data.email = formatEmail(this.inputEmail.value);
    this.inputEmail.value = data.email;

    if (data.isValidEmail()) {
      this.inputEmail.classList.remove(INVALID_FIELD_CLASS);
      this.inputEmail.setAttribute('aria-invalid', 'false');
      this.inputEmailErr.textContent = '';
    } else {
      this.inputEmail.classList.add(INVALID_FIELD_CLASS);
      this.inputEmail.setAttribute('aria-invalid', 'true');
      this.inputEmailErr.textContent = data.emailValidationErrMsg;
    }
  }

  updatePhoneField(data: FormWithValidation): void {
    data.phone = formatPhone(this.inputPhone.value);
    this.inputPhone.value = data.phone;

    if (data.isValidPhone()) {
      this.inputPhone.classList.remove(INVALID_FIELD_CLASS);
      this.inputPhone.setAttribute('aria-invalid', 'false');
      this.inputPhoneErr.textContent = '';
    } else {
      this.inputPhone.classList.add(INVALID_FIELD_CLASS);
      this.inputPhone.setAttribute('aria-invalid', 'true');
      this.inputPhoneErr.textContent = data.phoneValidationErrMsg;
    }
  }
}
