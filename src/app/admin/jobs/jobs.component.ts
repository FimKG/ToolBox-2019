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
    this.getPostedJobs();
  }

  getCategories()
  {

    this.adminservice.GetAllCategories().subscribe(data =>{
        this.categories = data.data;
        console.log(data.data);
    })
  }

  getPostedJobs()
  {
  this.adminservice.GetAllJobs().subscribe(data =>{
    this.postedJobs= data.results;
  })
   
  }

}
