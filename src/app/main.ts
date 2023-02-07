import { AppView } from './view/app-view';
import { FormStep } from './types';
import { TPlanData } from './data/types';
import { PlanData } from './data/plan-data';

class MultiStepApp {
  private step: FormStep = FormStep.STEP1;

  private data: TPlanData = new PlanData();

  private view = new AppView(this.data);

  constructor() {
    this.getStep(FormStep.STEP1);
  }

  init(): void {
    this.view.btnBack.addEventListener('click', () => {
      this.prevStep();
    });

    this.view.btnNext.addEventListener('click', () => {
      this.view.userForm.updateUsernameField(this.data);
      this.view.userForm.updateEmailField(this.data);
      this.view.userForm.updatePhoneField(this.data);

      if (this.data.user.isValidUser()) {
        this.nextStep();
      }
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
    if (this.step < FormStep.STEP5) {
      this.step += 1;
      this.view.drawStep(this.step);
    }

    if (this.step === FormStep.STEP4) {
      this.view.report.update(this.data);
    }

    if (this.step === FormStep.STEP5) {
      // eslint-disable-next-line no-console
      console.dir(this.data); // FOR PRESENTATION
    }
  }

  prevStep(): void {
    if (this.step > FormStep.STEP1) {
      this.step -= 1;
      this.view.drawStep(this.step);
    }
  }
}

const app = new MultiStepApp();
export default app;
