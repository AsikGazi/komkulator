import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Shared/material.module';
import { FormsModule } from '@angular/forms';


import { UserModule } from './Modules/UserModule/user/user.module';
import { MasterDataModule } from './Modules/MasterDataModule/master-data/master-data.module';
import { LoginModule } from './Modules/AuthModule/login/login.module';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,

    MasterDataModule,
    UserModule,
    LoginModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
