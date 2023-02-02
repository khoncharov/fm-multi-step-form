import AppController from './controller/controller';
import FormValidation from './data/form-validation';
import { FormStep } from './types';
import AppView from './view/view';

class MultiStepApp {
  private controller = new AppController();

  private view = new AppView();

  private data = new FormValidation();

  constructor() {
    this.controller.getStep(this.view, FormStep.STEP1);
  }

  init(): void {
    this.view.btnBack.addEventListener('click', () => {
      this.controller.prevStep(this.view);
    });

    this.view.btnNext.addEventListener('click', () => {
      // if (data.isValid)
      this.controller.nextStep(this.view);
    });

    this.view.inputName.addEventListener('input', (e) => {
      console.log((e.target as HTMLInputElement).value);
      // data.validateName
    });
  }
}

const app = new MultiStepApp();
export default app;
