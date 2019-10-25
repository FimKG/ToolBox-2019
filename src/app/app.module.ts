import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfirmPassword } from './client/register/register.component';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './client/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './client/header/header.component';
import { AuthGuard } from './auth.guard';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminSidenavComponent } from './admin/admin-sidenav/admin-sidenav.component';
import { ArtisansComponent } from './admin/artisans/artisans.component';
import { JobPosterComponent } from './admin/job-poster/job-poster.component';
import { JobsComponent } from './admin/jobs/jobs.component';
import { ArtisanProfileComponent } from './client/artisan-profile/artisan-profile.component';
import { PostedJobsComponent } from './client/posted-jobs/posted-jobs.component';
import { RegisterComponent } from './client/register/register.component';
import { LoginComponent } from './client/login/login.component';
import { ArtisanApplicationsComponent } from './admin/artisan-applications/artisan-applications.component';
import { ApprovedComponent } from './admin/approved/approved.component';
import { DeclinedComponent } from './admin/declined/declined.component';
import { ApplicationComponent } from './client/application/application.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { UserProfileComponent } from './client/user-profile/user-profile.component';
import { NgxPaginationModule } from 'ngx-pagination';
// import {  } from '../';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AdminDashboardComponent,
    AdminHeaderComponent,
    AdminSidenavComponent,
    ArtisansComponent,
    JobPosterComponent,
    JobsComponent,
    ArtisanProfileComponent,
    PostedJobsComponent,
    RegisterComponent,
    LoginComponent,
    ArtisanApplicationsComponent,
    ApprovedComponent,
    DeclinedComponent,
    ApplicationComponent,
    UserProfileComponent,
    ConfirmPassword


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule


  ],
  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
