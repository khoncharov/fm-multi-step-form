import { TMembershipPlan, TAdditionalService } from './types';

export const MEMBERSHIP: TMembershipPlan[] = [
  {
    name: 'Arcade',
    description: '2 months free',
    icon: 'icon-arcade',
    costPerMonth: 9,
    costPerYear: 90,
    currency: 'USD',
  },
  {
    name: 'Advanced',
    description: '2 months free',
    icon: 'icon-advanced',
    costPerMonth: 12,
    costPerYear: 120,
    currency: 'USD',
  },
  {
    name: 'Pro',
    description: '2 months free',
    icon: 'icon-pro',
    costPerMonth: 15,
    costPerYear: 150,
    currency: 'USD',
  },
];

export const ADDON: TAdditionalService[] = [
  {
    name: 'Online service',
    description: 'Access to multiplayer games',
    costPerMonth: 1,
    costPerYear: 10,
    currency: 'USD',
  },
  {
    name: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    costPerMonth: 2,
    costPerYear: 20,
    currency: 'USD',
  },
  {
    name: 'Customizable Profile',
    description: 'Custom theme on your profile',
    costPerMonth: 2,
    costPerYear: 20,
    currency: 'USD',
  },
];
