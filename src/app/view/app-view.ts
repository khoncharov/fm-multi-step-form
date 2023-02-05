import {
  btnConfirmClass,
  BTN_LABEL_CONFIRM,
  BTN_LABEL_NEXT,
  FORM_STEPS_NUMBER,
  SIDEBAR_ACTIVE_CLASS,
} from '../const';
import { FormView } from './form-view';
import { FormStep } from '../types';

export class AppView extends FormView {
  private sidebarNodes = document.querySelectorAll(
    '.sidebar-item__num',
  ) as NodeListOf<HTMLDivElement>;

  public btnBack = document.querySelector('#form-btn-back') as HTMLButtonElement;

  public btnNext = document.querySelector('#form-btn-next') as HTMLButtonElement;

  public btnChangePlan = document.querySelector('#btn-change-plan') as HTMLButtonElement;

  private formSteps: HTMLElement[];

  constructor() {
    super();

    this.formSteps = Array(FORM_STEPS_NUMBER)
      .fill(0)
      .map((i, index) => {
        const elem = document.querySelector(`#form-step-${index + 1}`) as HTMLElement;
        return elem;
      });
  }

  drawStep(step: FormStep): void {
    this.updateSidebar(step);

    this.updateBtnBack(step);

    this.updateBtnNext(step);

    this.updateForm(step);
  }

  updateSidebar(step: FormStep): void {
    this.sidebarNodes.forEach((elem) => {
      if (elem.classList.contains(SIDEBAR_ACTIVE_CLASS)) {
        elem.classList.remove(SIDEBAR_ACTIVE_CLASS);
      }
    });

    const markerNumber = step === FormStep.STEP5 ? FormStep.STEP4 : step;
    this.sidebarNodes.item(markerNumber - 1).classList.add(SIDEBAR_ACTIVE_CLASS);
  }

  updateBtnBack(step: FormStep): void {
    if (step === FormStep.STEP1 || step === FormStep.STEP5) {
      this.btnBack.style.display = 'none';
    } else {
      this.btnBack.style.display = 'block';
    }
  }

  updateBtnNext(step: FormStep): void {
    if (step === FormStep.STEP5) {
      this.btnNext.style.display = 'none';
    } else {
      const btnLabel = this.btnNext.firstElementChild as HTMLSpanElement;

      if (step === FormStep.STEP4) {
        btnLabel.textContent = BTN_LABEL_CONFIRM;
        this.btnNext.classList.add(btnConfirmClass);
      } else {
        btnLabel.textContent = BTN_LABEL_NEXT;
        this.btnNext.classList.remove(btnConfirmClass);
      }
    }
  }

  updateForm(step: FormStep): void {
    this.formSteps.forEach((i) => {
      // eslint-disable-next-line no-param-reassign
      i.style.display = 'none';
    });

    this.formSteps[step - 1].style.display = 'block';
  }
}
