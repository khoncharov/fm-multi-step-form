import { TPlanData } from '../data/types';
import { getItemPrice } from './utils';

export class Report {
  private planList = document.querySelector('.summary__list') as HTMLUListElement;

  private totalPriceElem = document.querySelector('.summary__total') as HTMLDivElement;

  update(data: TPlanData): void {
    const divider = '<li class="summary__divider" aria-hidden="true"></li>';

    // eslint-disable-next-line operator-linebreak
    const periodCapitalized =
      data.paymentPeriod.slice(0, 1).toUpperCase() + data.paymentPeriod.slice(1);

    const planPrice = getItemPrice(data.plan, data);

    const addonList: string[] = [];
    data.addons.forEach((addon) => {
      const addonPrice = getItemPrice(addon, data);

      addonList.push(`
        <li class="summary__addon-inner">
          <p class="summary__addon">${addon.name}</p>
          <p class="summary__addon-price">+${addonPrice}</p>
        </li>`);
    });

    this.planList.innerHTML = `
      <li class="summary__plan-inner">
        <p class="summary__plan">${data.plan.name} (${periodCapitalized}ly)</p>
        <p class="summary__plan-price">${planPrice}</p>
        <div class="summary__btn"></div>
      </li>
      ${data.addons.length === 0 ? '' : divider}
      ${addonList.join('')}`;

    const totalPrice = getItemPrice(data.getTotal(), data);

    this.totalPriceElem.innerHTML = `
      <p class="summary__total-caption">Total (per ${data.paymentPeriod})</p>
      <p class="summary__total-price">${totalPrice}</p>`;
  }
}
