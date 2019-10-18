import { Component, OnInit, Input, Output } from '@angular/core';
import {AdminServiceService} from '../../admin-service.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  categories:any;
  postedJobs: any;
  // postedJob: any;
  selectedCategory: any;
  job_id: '';

  @Input() postedJob = {

    name: '',
    surname: '',
    job_heading: '',
    full_description:'',
    contacts:'',
    location:'',
    job_id:''


  }

  constructor(private adminservice: AdminServiceService) { }

  ngOnInit() {
    this. getCategories();
    this.getPostedJobs();
  }

  getCategories()
  {

    this.adminservice.GetAllCategories().subscribe(data =>{
        this.categories = data.data;
        console.log(this.categories);
    })
  }

  getPostedJobs()
  {
  this.adminservice.GetAllJobs().subscribe(data =>{
    this.postedJobs= data.results;
    console.log(this.postedJobs);
  })
   
  }

  getSelectedCat(category)
  {
    this.selectedCategory = category.catID;
    console.log(this.selectedCategory);
    this. getArtisansBasedOnCategory(this.selectedCategory);
   
  }

  getArtisansBasedOnCategory(id)
  {
    this.adminservice.GetJobsbasedOnCatgory(id).subscribe(data=>{
      this.postedJobs = data.data;
      // console.log(this.postedJobs);
    })
  }

  getJobPostedUpdate()
  {
   
    this.adminservice.getJobPostedUpdate(this.postedJob ).subscribe()
  }

  GetEachJob(job){
    this.postedJob = job;
  }

  getJobPostedStatus(job_id) {
    this.adminservice.getJobPostedStatus(job_id).subscribe()
  }

}
