import { Component, OnInit } from '@angular/core';
import { UserService } from './../../user.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  users: any;

  constructor(private _userService : UserService) { }

  ngOnInit() {
    this._userService.currentUsers.subscribe(res => this.users = this.users)
  }

  newUser(){
    this._userService.sendUsers(res => this.users)
  }

}
