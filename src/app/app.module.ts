import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import {appRoutes, appRoutingProviders} from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {AuthenticationService} from './_services/authentication.service';
import {AuthGuard} from './_guard/authguard';
import {AppSessionService} from './session/app-session.service';
import {AutoLogoutService} from './session/auto-logout.service';
import {StoreModule} from '@ngrx/store';
import {HttpModule} from '@angular/http';
import {SessionModule} from './session/session.module';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FinancialModule } from './financial/financial.module';
import { ToolbarButtonDirective } from './_directive/toolbar-button.directive';
import { AngularMaterialModule } from './_shared/angular-material-module.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FinancialModule,
    appRoutes,
    SessionModule,
    FlexLayoutModule,
    AngularMaterialModule
  ],
  providers: [
    appRoutingProviders,
    AuthenticationService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
