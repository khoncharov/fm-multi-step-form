export default class FormView {
  inputName = document.querySelector('#form-input-name') as HTMLInputElement;

  inputEmail = document.querySelector('#form-input-email') as HTMLInputElement;

  inputPhone = document.querySelector('#form-input-tel') as HTMLInputElement;

  inputNameErr = document.querySelector('#form-input-name-err') as HTMLInputElement;

  inputEmailErr = document.querySelector('#form-input-email-err') as HTMLInputElement;

  inputPhoneErr = document.querySelector('#form-input-tel-err') as HTMLInputElement;
}
