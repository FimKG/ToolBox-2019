import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-posted-jobs',
  templateUrl: './posted-jobs.component.html',
  styleUrls: ['./posted-jobs.component.css']
})
export class PostedJobsComponent implements OnInit {

  categories: any;
  Posters: any;

  constructor(private catag : UserService) { }

  ngOnInit()
  {
    this.getAllPostedJob();
    this.getCat();
    this.userInfo();
  }

  getAllPostedJob()
  {
     return this.catag.GetJobs().subscribe(data=>{
      this.Posters = data.data,
       console.log(this.Posters);
    });
  }

  getCat()
  {
    return this.catag.getCategory().subscribe(response =>
          this.categories = response.data);
  }
  userInfo(){
    this.catag.$isLoggedIn
    .subscribe((data) =>{
      console.log("user data pleasse", data);
    })
  }
}
