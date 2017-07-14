import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarButtonDirective } from '../_directive/toolbar-button.directive';
import { AngularMaterialModule } from '../_shared/angular-material-module.module';
import { RouterModule } from '@angular/router';
import { WebFormModule } from './web-form/web-form.module';
import { MainComponent } from './main/main.component';
import { MainService } from './main/main-service.service';
import { CatogoryComponent } from './catogory/catogory.component';
import { FinancialComponent } from './financial.component';
import { WindowRefService } from './window-ref.service';
@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    WebFormModule,
    RouterModule
  ],
  declarations: [
    CatogoryComponent,
    FinancialComponent,
    MainComponent,
    ToolbarButtonDirective
  ],
  providers: [
    WindowRefService,
    MainService
  ],
})
export class FinancialModule { }
