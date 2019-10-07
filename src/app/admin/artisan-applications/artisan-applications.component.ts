import { Component, OnInit } from '@angular/core';

import { UserService } from '../../user.service'


@Component({
  selector: 'app-artisan-applications',
  templateUrl: './artisan-applications.component.html',
  styleUrls: ['./artisan-applications.component.css']
})
export class ArtisanApplicationsComponent implements OnInit {

  users: any;

  constructor(private lists: UserService) {

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
    this.userDetails();
  }


  userDetails() {
    
    // .subscribe(
    //   data => {
        console.log("fgdfhfthdfh", this.lists.getAnonymous())
      // }
    // )
  
  }

}
