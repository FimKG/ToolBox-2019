import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artisan-applications',
  templateUrl: './artisan-applications.component.html',
  styleUrls: ['./artisan-applications.component.css']
})
export class ArtisanApplicationsComponent implements OnInit {

  users: any;

  constructor() {

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
    // this.userDetails();
  }


  // userDetails() {
  //   this.lists.GetAllApprovedArtisans().subscribe(
  //     data => {
  //       console.log("fgdfhfthdfh",data)
  //     }
  //   )
  
  // }

}
