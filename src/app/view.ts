import {
  btnConfirmClass,
  BTN_LABEL_CONFIRM,
  BTN_LABEL_NEXT,
  FORM_STEPS_NUMBER,
  sideBarActiveClass,
} from './const';
import { FormStep } from './types';

export default class AppView {
  private sidebarNodes = document.querySelectorAll(
    '.sidebar-item__num',
  ) as NodeListOf<HTMLDivElement>;

  public btnBack = document.querySelector('#form-btn-back') as HTMLButtonElement;

  public btnNext = document.querySelector('#form-btn-next') as HTMLButtonElement;

  private formSteps: HTMLElement[];

  constructor() {
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
      if (elem.classList.contains(sideBarActiveClass)) {
        elem.classList.remove(sideBarActiveClass);
      }
    });

    const markerNumber = step === FormStep.STEP5 ? FormStep.STEP4 : step;
    this.sidebarNodes.item(markerNumber - 1).classList.add(sideBarActiveClass);
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
