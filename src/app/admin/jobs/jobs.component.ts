import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from '../../admin-service.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  categories:any;
  postedJobs: any;

  constructor(private adminservice: AdminServiceService) { }

  ngOnInit() {
    this. getCategories();
    this.getAllPostedJobs();
  }

  getCategories()
  {

    this.adminservice.GetAllCategories().subscribe(data =>{
        this.categories = data.data;
        console.log(data.data);
    })
  }

  getAllPostedJobs()
  {
    this.adminservice.GetAllJobsPosted().subscribe(data=>{
      this.postedJobs = data.results;
      console.log(this.postedJobs);
    
     
    })
  }

}
