import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './_components/authentication/login/login.component';
import { ForgotPasswordComponent } from './_components/authentication/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './_components/authentication/change-password/change-password.component';
import { ResetPasswordComponent } from './_components/authentication/reset-password/reset-password.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
