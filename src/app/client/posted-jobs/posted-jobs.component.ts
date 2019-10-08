import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-posted-jobs',
  templateUrl: './posted-jobs.component.html',
  styleUrls: ['./posted-jobs.component.css']
})
export class PostedJobsComponent implements OnInit {

  categories: any;

  constructor(private catag : UserService) { }

  ngOnInit() {
    return this.catag.getCategory().subscribe(response =>
      this.categories = response.data);
  }

}
