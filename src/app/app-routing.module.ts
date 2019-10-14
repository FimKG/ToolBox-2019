import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './client/home/home.component';
import { HeaderComponent } from './client/header/header.component';
import {PostedJobsComponent } from './client/posted-jobs/posted-jobs.component';
import {RegisterComponent} from './client/register/register.component';
import {LoginComponent} from './client/login/login.component';
import {ApplicationComponent} from './client/application/application.component';
import { UserProfileComponent } from './client/user-profile/user-profile.component';

//Admin Components
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminSidenavComponent } from './admin/admin-sidenav/admin-sidenav.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ArtisansComponent} from './admin/artisans/artisans.component';
import {JobPosterComponent} from  './admin/job-poster/job-poster.component';
import {JobsComponent} from './admin/jobs/jobs.component';
import { ArtisanProfileComponent} from './client/artisan-profile/artisan-profile.component';
import { ArtisanApplicationsComponent} from './admin/artisan-applications/artisan-applications.component';
import {ApprovedComponent} from './admin/approved/approved.component';
import {DeclinedComponent} from './admin/declined/declined.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '', component: HeaderComponent,
    children: [ // all childrens components below
      { path: '', component: HomeComponent },
      { path: 'artisan-profile', component: ArtisanProfileComponent,canActivate: [AuthGuard] },
      { path: 'posted-jobs', component: PostedJobsComponent, canActivate: [AuthGuard]},
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: 'application', component: ApplicationComponent },
      { path: 'user-profile', component: UserProfileComponent },
      
     
      
    
    ]
  },

  //Admin Components

  { path: 'admin-header', component: AdminHeaderComponent },
  { path: 'admin-sidenav', component: AdminSidenavComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'artisans', component: ArtisansComponent },
  { path: 'job-poster', component: JobPosterComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'artisan-applications', component: ArtisanApplicationsComponent },
  { path: 'approved-artisans', component: ApprovedComponent }, { path: 'declined-artisans', component: DeclinedComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
