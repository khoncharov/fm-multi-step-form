import AppController from './controller/controller';
import AppView from './view/view';
import FormWithValidation from './data/form-validation';
import { FormStep } from './types';

class MultiStepApp {
  private controller = new AppController();

  private view = new AppView();

  private data = new FormWithValidation();

  constructor() {
    this.controller.getStep(this.view, FormStep.STEP1);
  }

  init(): void {
    this.view.btnBack.addEventListener('click', () => {
      this.controller.prevStep(this.view);
    });

    this.view.btnNext.addEventListener('click', () => {
      if (this.data.isValidForm()) {
        this.controller.nextStep(this.view);
      }
      this.view.updateUsernameField(this.data);
      this.view.updateEmailField(this.data);
      this.view.updatePhoneField(this.data);
    });

    this.view.inputName.addEventListener('blur', () => {
      this.view.updateUsernameField(this.data);
    });

    this.view.inputEmail.addEventListener('blur', () => {
      this.view.updateEmailField(this.data);
    });

    this.view.inputPhone.addEventListener('blur', () => {
      this.view.updatePhoneField(this.data);
    });
  }
}

const app = new MultiStepApp();
export default app;
