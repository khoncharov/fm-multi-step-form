import AppView from './view/app-view';
import DataWithValidation from './data/data-validation';
import { FormStep } from './types';

class MultiStepApp {
  private step: FormStep = FormStep.STEP1;

  private view = new AppView();

  private data = new DataWithValidation();

  constructor() {
    this.getStep(FormStep.STEP1);
  }

  init(): void {
    this.view.btnBack.addEventListener('click', () => {
      this.prevStep();
    });

    this.view.btnNext.addEventListener('click', () => {
      if (this.data.isValidForm()) {
        this.nextStep();
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

  getStep(step: FormStep): void {
    this.step = step;
    this.view.drawStep(this.step);
  }

  nextStep(): void {
    if (this.step < 5) {
      this.step += 1;
      this.view.drawStep(this.step);
    }
  }

  prevStep(): void {
    if (this.step > 1) {
      this.step -= 1;
      this.view.drawStep(this.step);
    }
  }
}

const app = new MultiStepApp();
export default app;
