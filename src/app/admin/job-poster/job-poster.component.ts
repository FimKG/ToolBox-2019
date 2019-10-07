import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from '../../admin-service.service'

@Component({
  selector: 'app-job-poster',
  templateUrl: './job-poster.component.html',
  styleUrls: ['./job-poster.component.css']
})
export class JobPosterComponent implements OnInit {

  users: [];

  constructor(private lists: AdminServiceService) { }

  ngOnInit() {

    this.jobPosters();
  }

  jobPosters()
  {
    this.lists.GetAllJobPosters().subscribe(
      response => {
        // console.log("fgdfhfthdfh",data)
        this.users = response.data;
      }
    )
  }

}
