import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from '../../admin-service.service';

@Component({
  selector: 'app-artisan-applications',
  templateUrl: './artisan-applications.component.html',
  styleUrls: ['./artisan-applications.component.css']
})
export class ArtisanApplicationsComponent implements OnInit {

  users: [];

  constructor(private lists: AdminServiceService) {

    // this.user = {

    //  Details : ['Sandile']

    // }

    //   const users = [
    //     {Firstname:'Sandile'},
    //     {Lastname:'kheswa'},
    //     {Category:'Plumber'},
    //     {IdentityNo:'2365654875298'},
    //     {Action:''}
    // ];

  }

  ngOnInit() {
    this.artApplications();
  }


  artApplications() {

      this.lists.GetAllApplications().subscribe(
      respone => {
        // console.log("fgdfhfthdfh",data)
        this.users = respone.data;
      }
    )
  
  }

}
