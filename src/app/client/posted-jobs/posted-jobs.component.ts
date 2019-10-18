import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-posted-jobs',
  templateUrl: './posted-jobs.component.html',
  styleUrls: ['./posted-jobs.component.css']
})
export class PostedJobsComponent implements OnInit {

  categories: any;


  constructor(private _userService : UserService) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory() {
    return this._userService.getCategory().subscribe(response =>
      this.categories = response.data);
  }

  

}
