import { Component, OnInit, Input } from '@angular/core';
import {AdminServiceService} from '../../admin-service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  numOfArtisans: any;
  numApprovedArtisans: any;
  numDeclinedArtisans: any;
  numOfPostedJobs: any;
  numOfJobPosters: any;

  constructor(private adminservice: AdminServiceService) { }
 

  ngOnInit() {

    this.getNumOfArtisans();
    this.getNumOfApprovedArtisans();
    this.getNumOfDeclinedArtisans();
    this.getNumOfPostedJobs();
    this.getNumOfJobPosters();
  }
  
  getNumOfArtisans()
  {
    this.adminservice.getTotalNumberOfArtisans().subscribe(data =>{
      this.numOfArtisans = data[0].Total_artisan;
    
      console.log(this.numOfArtisans);
  })
  }

  getNumOfApprovedArtisans()
  {
    this.adminservice.getTotalNumberOfApprovedArtisans().subscribe(data =>{
      this.numApprovedArtisans = data[0].total_applications_approved;
    
      console.log(this.numApprovedArtisans);
  })
  }

  getNumOfDeclinedArtisans()
  {
    this.adminservice.getTotalNumberOfDeclinedArtisans().subscribe(data =>{
      this.numDeclinedArtisans = data[0].total_declined_application;
    
      console.log(this.numDeclinedArtisans);
  })
  }

  getNumOfPostedJobs()
  {
    this.adminservice.getTotalOfJobsPosted().subscribe(data =>{
      this.numOfPostedJobs = data[0].Total_jobs_posted;
    
      console.log(this.numOfPostedJobs);
  })
  }

  getNumOfJobPosters()
  {
    this.adminservice.getTotalNumOfJobPosters().subscribe(data =>{
      this.numOfJobPosters = data[0].Total_job_posters;
    
      console.log(this.numOfJobPosters);
  })
  }
}
