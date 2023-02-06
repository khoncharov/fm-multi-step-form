/* eslint-disable operator-linebreak */
/* eslint-disable no-param-reassign */
import { DEFAULT_PLAN_INDEX } from '../const';
import { MEMBERSHIP } from '../data/plan-info';
import { TPlanData } from '../data/types';

export class PlanSelect {
  private planRadioButtons = document.querySelectorAll(
    '.plan-selector__radio-btn',
  ) as NodeListOf<HTMLInputElement>;

  private planLabels = document.querySelectorAll(
    '.plan-selector__item',
  ) as NodeListOf<HTMLLabelElement>;

  private termMonthly = document.querySelector('#term-toggle-1') as HTMLInputElement;

  private termYearly = document.querySelector('#term-toggle-2') as HTMLInputElement;

  constructor(data: TPlanData) {
    this.planRadioButtons.forEach((btn) => {
      btn.addEventListener('change', () => {
        this.planRadioButtons.forEach((item, index) => {
          if (item.checked) {
            data.plan = MEMBERSHIP[index];
          }
        });
      });
    });

    this.termMonthly.addEventListener('change', () => {
      data.paymentPeriod = 'month';
      this.updatePlanCards(data);
    });

    this.termYearly.addEventListener('change', () => {
      data.paymentPeriod = 'year';
      this.updatePlanCards(data);
    });

    this.init(data);
  }

  init(data: TPlanData): void {
    this.planRadioButtons.item(DEFAULT_PLAN_INDEX).checked = true;

    if (data.paymentPeriod === 'month') {
      this.termMonthly.click();
    } else {
      this.termYearly.click();
    }
  }

  updatePlanCards(data: TPlanData): void {
    this.planLabels.forEach((elem, index) => {
      const fn = new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: data.plan.currency,
        maximumFractionDigits: 0,
      });

      const planPrice =
        data.paymentPeriod === 'year'
          ? `${fn.format(MEMBERSHIP[index].costPerYear)}/yr`
          : `${fn.format(MEMBERSHIP[index].costPerMonth)}/mo`;

      const description = data.paymentPeriod === 'year' ? MEMBERSHIP[index].description : '';

      elem.innerHTML = `
        <span class="plan-selector__item-${MEMBERSHIP[index].icon}"></span>
        <span class="plan-selector__item-caption">${MEMBERSHIP[index].name}</span>
        <span class="plan-selector__item-price">${planPrice}</span>
        <span class="plan-selector__item-info">${description}</span>`;
    });
  }
}
