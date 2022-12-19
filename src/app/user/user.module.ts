import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';

import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopUpComponent } from './pop-up/pop-up.component';


@NgModule({
  declarations: [
    UserHomePageComponent,
    PopUpComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ], 
  exports:[
    UserHomePageComponent
  ]
})
export class UserModule { }
