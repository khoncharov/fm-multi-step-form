import { FormStep } from './types';
import AppView from './view';

export default class AppController {
  public step: FormStep = FormStep.STEP1;

  getStep(view: AppView, step: FormStep): void {
    this.step = step;
    view.drawStep(this.step);
  }

  nextStep(view: AppView): void {
    if (this.step < 5) {
      this.step += 1;
      view.drawStep(this.step);
    }
  }

  prevStep(view: AppView): void {
    if (this.step > 1) {
      this.step -= 1;
      view.drawStep(this.step);
    }
  }
}
