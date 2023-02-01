import {
  btnConfirmClass, //
  BTN_LABEL_CONFIRM,
  BTN_LABEL_NEXT,
  sideBarActiveClass,
} from './const';
import { FormStep } from './types';

export default class AppView {
  private sidebarNodes = document.querySelectorAll(
    '.sidebar-item__num',
  ) as NodeListOf<HTMLDivElement>;

  public btnBack = document.querySelector('#form-btn-back') as HTMLButtonElement;

  public btnNext = document.querySelector('#form-btn-next') as HTMLButtonElement;

  private formContainer = document.querySelector('.form__content') as HTMLElement;

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
    this.formContainer.innerHTML = '';

    const fragment = document.querySelector(`#form-step-${step}`) as HTMLTemplateElement;

    this.formContainer.append(fragment.content.cloneNode(true));
  }
}
