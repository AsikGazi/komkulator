import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { MaterialModule } from 'src/app/Shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormsComponent } from './login-forms/login-forms.component';

@NgModule({
  declarations: [
    LoginFormComponent,
    LoginFormsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports: [
    LoginFormComponent
  ]
})
export class LoginModule { }
