import AppController from './controller';
import { FormStep } from './types';
import AppView from './view';

class MultiStepApp {
  private controller = new AppController();

  private view = new AppView();

  constructor() {
    this.controller.getStep(this.view, FormStep.STEP1);
  }

  init(): void {
    this.view.btnBack.addEventListener('click', () => {
      this.controller.prevStep(this.view);
    });

    this.view.btnNext.addEventListener('click', () => {
      this.controller.nextStep(this.view);
    });
  }
}

const app = new MultiStepApp();
export default app;
