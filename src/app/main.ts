import { AppView } from './view/app-view';
import { FormStep } from './types';
import { TPlanData } from './data/types';
import { PlanData } from './data/plan-data';

class MultiStepApp {
  private step: FormStep = FormStep.STEP1;

  private view = new AppView();

  private data: TPlanData = new PlanData();

  constructor() {
    this.getStep(FormStep.STEP1);
  }

  init(): void {
    this.view.btnBack.addEventListener('click', () => {
      this.prevStep();
    });

    this.view.btnNext.addEventListener('click', () => {
      if (this.data.user.isValidUser()) {
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

    this.view.btnChangePlan.addEventListener('click', () => {
      this.getStep(FormStep.STEP2);
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
