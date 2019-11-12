import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-posted-jobs',
  templateUrl: './posted-jobs.component.html',
  styleUrls: ['./posted-jobs.component.css']
})
export class PostedJobsComponent implements OnInit {

  categories: any;
  Posters: any;
  jobposterArray: any;


  constructor(private _userService : UserService) { }
  @Input() poster = {
    name: '',
    surname: '',
    job_heading: '',
    full_description: '',
    contacts: '',
    email: '',
    category: '',
    job_id: ''
  }

  ngOnInit()
  {
    this.getAllPostedJob();
    this.getCat();
    this.userInfo();
    this.getClients();
  }

  getAllPostedJob()
  {
     return this._userService.GetJobs().subscribe(data=>{
      this.Posters = data.data,
       console.log(this.Posters);
    });
  }
  getClients() {
    this._userService.getClients().subscribe(data => {
      this.jobposterArray = data.data;
      //console.log(data.data);
    })
  }

  getCat()
  {
    return this._userService.getCategory().subscribe(response =>
          this.categories = response.data);
  }
  userInfo(){
    this._userService.$isLoggedIn
    .subscribe((data) =>{
      console.log("user data pleasse", data);
    })
  }
  // GetEachPoster(art) {
  //   this.poster = art;
  //   console.log(art);
  //  }

}
