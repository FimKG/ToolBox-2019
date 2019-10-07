import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from '../../admin-service.service';

import {UserService} from '../../user.service'

@Component({
  selector: 'app-job-poster',
  templateUrl: './job-poster.component.html',
  styleUrls: ['./job-poster.component.css']
})
export class JobPosterComponent implements OnInit {
  jobposterArray: any;
  categories: any;
  adminservice: any;

  constructor(private http: UserService) { }

  ngOnInit() {
    this.getClients();
    this. GetAllCategories();
   
  }
  getClients()
  {
    this.adminservice.getClients().subscribe(data=>{
      this.jobposterArray = data.data;
      console.log(data.data);
    })
  }

  GetAllCategories()
  {
    this.adminservice.GetAllCategories().subscribe(data=>{
      this.categories = data.data;
      console.log(data.data);
    })
  }
}

