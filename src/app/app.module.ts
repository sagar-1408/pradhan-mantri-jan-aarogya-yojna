import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
//  Authentication Components
import { LoginComponent } from './_components/authentication/login/login.component';
import { ChangePasswordComponent } from './_components/authentication/change-password/change-password.component';
import { ForgotPasswordComponent } from './_components/authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './_components/authentication/reset-password/reset-password.component';
// Navigation Components
import { HeaderComponent } from './_components/navigation/header/header.component';
import { FooterComponent } from './_components/navigation/footer/footer.component';
// Common Components
import { DashboardComponent } from './_components/pmjay/dashboard/dashboard.component';
import { PmjayComponent } from './_components/pmjay/pmjay/pmjay.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    PmjayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
