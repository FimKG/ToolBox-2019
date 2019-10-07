import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from '../../admin-service.service';

@Component({
  selector: 'app-artisan-applications',
  templateUrl: './artisan-applications.component.html',
  styleUrls: ['./artisan-applications.component.css']
})
export class ArtisanApplicationsComponent implements OnInit {

  applications: any;
  categories: any;
  constructor(private adminservice: AdminServiceService) { }

  ngOnInit() {
    this.GetAllApplications();
    this. GetAllCategories();
  }

  GetAllApplications()
  {
    this.adminservice.getAllArtisanApplication().subscribe(data=>{
      this.applications = data.data;
      console.log(this.applications);
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
