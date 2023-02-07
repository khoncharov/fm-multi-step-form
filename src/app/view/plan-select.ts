/* eslint-disable operator-linebreak */
/* eslint-disable no-param-reassign */
import { DEFAULT_ADDONS, DEFAULT_PLAN_INDEX } from '../const';
import { ADDON, MEMBERSHIP } from '../data/plan-info';
import { TAdditionalService, TPlanData } from '../data/types';
import { getItemPrice } from './utils';

export class PlanSelect {
  private termMonthly = document.querySelector('#term-toggle-1') as HTMLInputElement;

  private termYearly = document.querySelector('#term-toggle-2') as HTMLInputElement;

  private planRadioButtons = document.querySelectorAll(
    '.plan-selector__radio-btn',
  ) as NodeListOf<HTMLInputElement>;

  private planLabels = document.querySelectorAll(
    '.plan-selector__item',
  ) as NodeListOf<HTMLLabelElement>;

  private addonCheckboxes = document.querySelectorAll(
    '.addon__checkbox',
  ) as NodeListOf<HTMLInputElement>;

  private addonLabels = document.querySelectorAll('.addon') as NodeListOf<HTMLLabelElement>;

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

    this.addonCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
        const a: TAdditionalService[] = [];

        this.addonCheckboxes.forEach((item, index) => {
          if (item.checked) {
            a.push(ADDON[index]);
          }
        });

        data.addons = a;
      });
    });

    this.termMonthly.addEventListener('change', () => {
      data.paymentPeriod = 'month';
      this.updatePlanCards(data);
      this.updateAddonList(data);
    });

    this.termYearly.addEventListener('change', () => {
      data.paymentPeriod = 'year';
      this.updatePlanCards(data);
      this.updateAddonList(data);
    });

    this.init(data);
  }

  init(data: TPlanData): void {
    this.planRadioButtons.item(DEFAULT_PLAN_INDEX).checked = true;

    DEFAULT_ADDONS.forEach((index) => {
      this.addonCheckboxes.item(index).checked = true;
    });

    if (data.paymentPeriod === 'month') {
      this.termMonthly.click();
    } else {
      this.termYearly.click();
    }
  }

  updatePlanCards(data: TPlanData): void {
    this.planLabels.forEach((elem, index) => {
      const price = getItemPrice(MEMBERSHIP[index], data);

      const description =
        data.paymentPeriod === 'year'
          ? `<span class="plan-selector__item-info">${MEMBERSHIP[index].description}</span>`
          : '';

      elem.innerHTML = `
        <span class="plan-selector__item-${MEMBERSHIP[index].icon}"></span>
        <span class="plan-selector__item-caption">${MEMBERSHIP[index].name}</span>
        <span class="plan-selector__item-price">${price}</span>
        ${description}`;
    });
  }

  updateAddonList(data: TPlanData): void {
    this.addonLabels.forEach((elem, index) => {
      const price = getItemPrice(ADDON[index], data);

      elem.innerHTML = `
        <span class="addon__check-mark"></span>
        <span class="addon__caption">${ADDON[index].name}</span>
        <span class="addon__description">${ADDON[index].description}</span>
        <span class="addon__price">+${price}</span>
      `;
    });
  }
}
