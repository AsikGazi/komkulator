import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterDataFromComponent } from './master-data-from/master-data-from.component';

import { MaterialModule } from '../material.module';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { Sheet9Component } from './sheet9/sheet9.component';




@NgModule({
  declarations: [MasterDataFromComponent, AdminPageComponent, Sheet9Component],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    MasterDataFromComponent,
    AdminPageComponent
  ]
})
export class MasterDataModule { }
