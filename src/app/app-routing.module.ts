import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './Modules/AuthModule/login/login-form/login-form.component';
import { MasterDataFromComponent } from './Modules/MasterDataModule/master-data/master-data-from/master-data-from.component';
import { UserHomePageComponent } from './Modules/UserModule/user/user-home-page/user-home-page.component';
// import { LoginFormsComponent } from './Modules/AuthModule/login/login-forms/login-forms.component';
import { Sheet9Component } from './Modules/MasterDataModule/master-data/sheet9/sheet9.component';
import { AdminPageComponent } from './Modules/MasterDataModule/master-data/admin-page/admin-page.component';

const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'user', component: UserHomePageComponent },
  { path: 'masterDataForm', component: MasterDataFromComponent },
  { path: 'sheet9', component: Sheet9Component },
  { path: 'admin', component: AdminPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
