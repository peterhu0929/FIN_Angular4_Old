import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guard/authguard';
// import { MainComponent } from './financial/main/main.component';
// import { CatogoryComponent } from './financial/catogory/catogory.component';
import { FinancialComponent } from './financial/financial.component';
import { MainComponent } from './financial/main/main.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'financial', component: FinancialComponent, canActivate: [AuthGuard]
  },
  {
    path: 'main', component: MainComponent, canActivate: [AuthGuard], children: [
      { path: 'WebForm', loadChildren: './financial/web-form/web-form.module#WebFormModule' },
      { path: 'WebMvc', loadChildren: './financial/web-mvc/web-mvc.module#WebMvcModule' },
    ]
  }
];



/*const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'financial', component: FinancialComponent, canActivate: [AuthGuard], children: [
      {
        path: 'main', component: MainComponent, children: [
          { path: 'WebForm', loadChildren: './ITGF/web-form/web-form.module#WebFormModule' },
          { path: 'WebMvc', loadChildren: './ITGF/web-mvc/web-mvc.module#WebMvcModule' },
        ]
      },

    ],

  },
];*/


export const appRoutingProviders: any[] = [];

export const appRoutes: any = RouterModule.forRoot(routes, { useHash: true });
