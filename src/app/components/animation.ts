 import { animate, state, style, transition, trigger } from '@angular/animations';

export const fadeIn = 
	trigger('fadeIn',[
		state('*', style({
			opacity: 1
		})),
		transition(':enter',[
			style({
				opacity: 0,
				transform: 'scale(0.4)'
			}),
			animate('300ms linear')
		]),
		transition(':leave',[
			animate('300ms linear', style({
				opacity: 0,
				transform: 'scale(1)'
			}))
		])
	]);