/* eslint-disable no-param-reassign */
import { formatEmail, formatPhone, formatUsername } from '../data/utils';
import { INVALID_FIELD_CLASS } from '../const';
import { TPlanData } from '../data/types';

export class FormView {
  inputName = document.querySelector('#form-input-name') as HTMLInputElement;

  inputEmail = document.querySelector('#form-input-email') as HTMLInputElement;

  inputPhone = document.querySelector('#form-input-tel') as HTMLInputElement;

  inputNameErr = document.querySelector('#form-input-name-err') as HTMLInputElement;

  inputEmailErr = document.querySelector('#form-input-email-err') as HTMLInputElement;

  inputPhoneErr = document.querySelector('#form-input-tel-err') as HTMLInputElement;

  updateUsernameField(data: TPlanData): void {
    data.user.name = formatUsername(this.inputName.value);
    this.inputName.value = data.user.name;

    if (data.user.isValidName()) {
      this.inputName.classList.remove(INVALID_FIELD_CLASS);
      this.inputName.setAttribute('aria-invalid', 'false');
      this.inputNameErr.textContent = '';
    } else {
      this.inputName.classList.add(INVALID_FIELD_CLASS);
      this.inputName.setAttribute('aria-invalid', 'true');
      this.inputNameErr.textContent = data.user.nameValidationErrMsg;
    }
  }

  updateEmailField(data: TPlanData): void {
    data.user.email = formatEmail(this.inputEmail.value);
    this.inputEmail.value = data.user.email;

    if (data.user.isValidEmail()) {
      this.inputEmail.classList.remove(INVALID_FIELD_CLASS);
      this.inputEmail.setAttribute('aria-invalid', 'false');
      this.inputEmailErr.textContent = '';
    } else {
      this.inputEmail.classList.add(INVALID_FIELD_CLASS);
      this.inputEmail.setAttribute('aria-invalid', 'true');
      this.inputEmailErr.textContent = data.user.emailValidationErrMsg;
    }
  }

  updatePhoneField(data: TPlanData): void {
    data.user.phone = formatPhone(this.inputPhone.value);
    this.inputPhone.value = data.user.phone;

    if (data.user.isValidPhone()) {
      this.inputPhone.classList.remove(INVALID_FIELD_CLASS);
      this.inputPhone.setAttribute('aria-invalid', 'false');
      this.inputPhoneErr.textContent = '';
    } else {
      this.inputPhone.classList.add(INVALID_FIELD_CLASS);
      this.inputPhone.setAttribute('aria-invalid', 'true');
      this.inputPhoneErr.textContent = data.user.phoneValidationErrMsg;
    }
  }
}
