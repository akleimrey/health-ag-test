import {
  trigger,
  transition,
  style,
  query,
  group,
  // animateChild,
  animate,
  keyframes,
} from '@angular/animations';

export const slider =
  trigger('routeAnimations', [
      transition('home => *', slideTo('right')),
      transition('rechnung => postfach', slideTo('right')),
      transition('rechnung => home', slideTo('left')),
      transition('rechnung => profil', slideTo('right')),
      transition('rechnung => *', slideTo('right')),
      transition('postfach => left', slideTo('left')),
      transition('postfach => home', slideTo('left')),
      transition('postfach => hilfe', slideTo('right')),
      transition('postfach => profil', slideTo('right')),
      transition('postfach => rechnung', slideTo('left')),
      transition('postfach => *', slideTo('right')),
      transition('profil => home', slideTo('left')),
      transition('profil => postfach', slideTo('left')),
      transition('profil => rechnung', slideTo('left')),
      transition('profil => hilfe', slideTo('left')),
      transition('profil => *', slideTo('right')),
      transition('hilfe => postfach', slideTo('left')),
      transition('hilfe => home', slideTo('left')),
      transition('hilfe => rechnung', slideTo('left')),
      transition('hilfe => postfach', slideTo('left')),
      transition('hilfe => profil', slideTo('right')),
      transition('* => *', slideTo('right')),
  ]);

function slideTo(direction) {
  const optional = { optional: true };
  const directionValue = direction === 'left' ? -100 : 100;
  return [
      query(':enter, :leave', [
          style({
              position: 'absolute',
              [direction]: 0,
              top: 0,
              transform: 'translateX(0)',
              width: '100%',
              opacity: 1,
              'min-height': 'calc(100vh)'
          })
      ], optional),
      query(':enter', [
          style({ transform: `translateX(${directionValue}%)`, opacity: 0 })
      ], optional),
      group([
          query(':leave', [
              animate('1000ms ease', style({ transform: `translateX(${directionValue}%)`, opacity: 0}))
          ], optional),
          query(':enter', [
              animate('1000ms ease', style({ transform: `translateX(0)`, opacity: 1 }))
          ], optional)
      ]),
      // Normalize the page style... Might not be necessary

      // Required only if you have child animations on the page
      // query(':leave', animateChild()),
      // query(':enter', animateChild()),
  ];
}

export const transformer =
  trigger('routeAnimations', [
      transition('* => isLeft', transformTo({ x: -100, y: -100, rotate: -720 })),
      transition('* => isRight', transformTo({ x: 100, y: -100, rotate: 90 })),
      transition('isRight => *', transformTo({ x: -100, y: -100, rotate: 360 })),
      transition('isLeft => *', transformTo({ x: 100, y: -100, rotate: -360 }))
  ]);


function transformTo({ x = 100, y = 0, rotate = 0 }) {
  const optional = { optional: true };
  return [
      query(':enter, :leave', [
          style({
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%'
          })
      ], optional),
      query(':enter', [
          style({ transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)` })
      ]),
      group([
          query(':leave', [
              animate('600ms ease-out', style({ transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)` }))
          ], optional),
          query(':enter', [
              animate('600ms ease-out', style({ transform: `translate(0, 0) rotate(0)` }))
          ])
      ]),
  ];
}

export const stepper =
trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
      }),
    ]),
    group([
      query(':enter', [
        animate('2000ms ease', keyframes([
          style({ transform: 'scale(0) translateX(100%)', offset: 0 }),
          style({ transform: 'scale(0.5) translateX(25%)', offset: 0.3 }),
          style({ transform: 'scale(1) translateX(0%)', offset: 1 }),
        ])),
      ]),
      query(':leave', [
        animate('2000ms ease', keyframes([
          style({ transform: 'scale(1)', offset: 0 }),
          style({ transform: 'scale(0.5) translateX(-25%) rotate(0)', offset: 0.35 }),
          style({ opacity: 0, transform: 'translateX(-50%) rotate(-180deg) scale(6)', offset: 1 }),
        ])),
      ])
    ]),
  ])

]);
