import {
  Component,
  ElementRef,
  ViewEncapsulation,
  OnInit,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  query,
  group,
  stagger,
  transition,
  animateChild
} from '@angular/animations';
// import { AnimationService, AnimationBuilder } from 'css-animator';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs/Subscription';



import {MainService} from './main-service.service';
import {USERS} from '../../_model/USERS';
import {Router} from '@angular/router';
import {AppSessionService} from '../../session/app-session.service';
import {AuthenticationService} from '../../_services/authentication.service';
import {USER_LOGGED_OUT} from '../../session/app.reducer';
import {Store} from '@ngrx/store';
import {IState} from '../../session/state.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss', '../../_shared/styles/styles.scss', '../../_shared/styles/_material-theme.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('routeAnimation', [
      transition('home => about', [
        group([
          query(':enter', [
            //style({}),
            animate('2s', style({ transform: 'translateX(-100%)' })),
            animateChild()
          ],
            { optional: true }
          ),
          query(':leave', [
            animate('2s', style({ transform: 'translateX(100%)' })),
            animateChild()
          ],
            { optional: true }
          )
        ])
      ]),
      transition('about => home', [
        group([
          query(':enter', [
            //style({}),
            animate('2s', style({ transform: 'translateX(-100%)' })),
            animateChild()
          ],
            { optional: true }
          ),
          query(':leave', [
            animate('2s', style({ transform: 'translateX(100%)' })),
            animateChild()
          ],
            { optional: true }
          )
        ])
      ])
    ])
  ]
})
export class MainComponent implements OnInit {

  public title: string = 'Coffee Shop Reviews';
  public content: string = 'App is running';

  public sidenavOpen = true;
  public sidenavMode = 'side';
  public isMobile = false;
  public logoSrc = '../assets/image/ym-logo-wo-wording.png';

  // private _animator: AnimationBuilder;
  private _mediaSubscription: Subscription;
  show = false;
  constructor(
    private media: ObservableMedia,
    private _elementRef: ElementRef,
    private _router: Router,
    private mainService: MainService,
    private sessionService: AppSessionService,
    private store: Store<IState>,
    private authenticationService: AuthenticationService,
    // private _animationService: AnimationService,
  ) {
    // this._animator = _animationService.builder();
    // this._animator.useVisibility = true;
  }
  public prepRouteState(outlet: any) {
    return outlet.activatedRouteData['animation'] || 'home';
  }
  Logout(): void {
    this._router.navigate(['/login']);
    this.store.dispatch({ type: USER_LOGGED_OUT });
    this.authenticationService.logout();
  }
  public ngOnInit() {
    // fade out app loading spinner
    // let loadingElem = document.getElementById('app-loading');
    // let spinningCircularElem = loadingElem.querySelector('.circular');
    // let spinningPathElem = loadingElem.querySelector('.path');

    // this._animator
    //   .setType('fadeOut')
    //   .setDelay(350)
    //   .setDuration(700)
    //   .hide(loadingElem)
    //   .then(() => {
    //     spinningCircularElem.classList.remove('running');
    //     spinningPathElem.classList.remove('running');
    //   });

    this._mediaSubscription = this.media.asObservable().subscribe((change:
      MediaChange) => {
      this.isMobile = (change.mqAlias === 'xs') || (change.mqAlias === 'sm');
      this.sidenavOpen = !this.isMobile;
      this.sidenavMode = (this.isMobile ? 'over' : 'side');
      this.logoSrc = (
        this.isMobile ?
          '../assets/image/ym-logo-wo-wording.png' :
          '../assets/image/ym-logo-w-wording.png');
    });
  }
}

// import { Component, OnInit } from '@angular/core';
// import {MainService} from './main-service.service';
// import {USERS} from '../session/USERS';
// import {Router} from '@angular/router';
// import {AppSessionService} from '../session/app-session.service';
// import {AuthenticationService} from '../_services/authentication.service';
// import {USER_LOGGED_OUT} from '../session/app.reducer';
// import {Store} from '@ngrx/store';
// import {IState} from '../session/state.model';
//
// import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
// @Component({
//   selector: 'app-main',
//   templateUrl: './main.component.html',
//   styleUrls: ['./main.component.scss'],
//   animations: [
//
//     trigger('listAnimation', [
//       transition('* => *', [
//
//         query(':enter', style({ opacity: 0 }), { optional: true }),
//
//         query(':enter', stagger('300ms', [
//           animate('1s ease-in', keyframes([
//             style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
//             style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
//             style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
//           ]))]), { optional: true }),
//
//         query(':leave', stagger('300ms', [
//           animate('1s ease-in', keyframes([
//             style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
//             style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
//             style({ opacity: 0, transform: 'translateY(-75%)', offset: 1.0 }),
//           ]))]), { optional: true })
//       ])
//     ]),
//
//     trigger('explainerAnim', [
//       transition('* => *', [
//         query('.col', style({ opacity: 0, transform: 'translateX(-40px)' })),
//
//         query('.col', stagger('500ms', [
//           animate('800ms 1.2s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
//         ])),
//
//         query('.col', [
//           animate(1000, style('*'))
//         ])
//
//       ])
//     ])
//
//   ]
// })
// export class MainComponent implements OnInit {
//   user: USERS;
//   moudle: string;
//   routes: Object[];
//   selectedRoute: Object[];
//   items = [];
//   constructor(
//     private _router: Router,
//     private mainService: MainService,
//     private sessionService: AppSessionService,
//     private store: Store<IState>,
//     private authenticationService: AuthenticationService, ) {
//     this.items = ['Hey this is an item', 'Here is another one', 'This is awesome'];
//   }
//   pushItem() {
//     this.items.push('Oh yeah that is awesome');
//   }
//   removeItem() {
//     this.items.pop();
//   }
//   ngOnInit(): void {
//     //this.mainService.getMenuDatas().then((x: any) => this.routes = x.userMenu.menu);
//     //this.user = this.sessionService.getUser();
//     this.moudle = JSON.parse(localStorage.getItem('currentMoulde'));
//   }
//   Logout(): void {
//     this._router.navigate(['/login']);
//     this.store.dispatch({ type: USER_LOGGED_OUT });
//     this.authenticationService.logout();
//   }
// }
