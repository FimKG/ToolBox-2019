import { Component, OnInit } from '@angular/core';
import { UserService } from './../../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _userService : UserService) { }

  ngOnInit() {
    this.userInfo();
  }

  userInfo(){
    this._userService.$isLoggedIn
    .subscribe((data) =>{
      console.log("user data pleasse", data);
    })
  }

}
