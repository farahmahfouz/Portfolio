import { trigger, style, transition, animate, state } from '@angular/animations';

export const slideUpAnimation = trigger('slideUp', [
  state('hidden', style({ transform: 'translateY(100%)', opacity: 0 })),
  state('visible', style({ transform: 'translateY(0)', opacity: 1 })),
  transition('hidden => visible', animate('900ms ease-out')),
  transition('visible => hidden', animate('1200ms ease-in-out')),
]);
