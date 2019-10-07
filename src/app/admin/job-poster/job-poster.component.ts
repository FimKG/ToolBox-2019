import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from '../../admin-service.service'

import {UserService} from '../../user.service'

@Component({
  selector: 'app-job-poster',
  templateUrl: './job-poster.component.html',
  styleUrls: ['./job-poster.component.css']
})
export class JobPosterComponent implements OnInit {
  jobposterArray: any;
  categoryArray: any;

  constructor(private http: UserService) { }

  ngOnInit() {
    this.http.getClients()
      .subscribe((data) => {
        this.jobposterArray = data.data;
        console.log(this.jobposterArray);

      })
  }

  
   ngOnIn() {
     this.http.getCategory()
       .subscribe((data) => {
        this.categoryArray = data.data;
        console.log(this.categoryArray);

     })
   }
}

