import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {}
  userID: any;

  constructor(private userService: UserService, private _router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    this.userService.userLogin(this.loginUserData)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
           this._router.navigate(['/posted-jobs'])
          // this.getUserType([this.userID]);
        },
        err => console.log(err)

      )
  }
  getUserType(e) {
    this.userID = e;
    // console.log(e.userID);
    console.log(this.userID);

    // if (this.userID == 1) {
    //   console.log(this.userID);
    //   this._router.navigate(['/posted-jobs']);
    // } else {
    //   this._router.navigate(['/artisan-profile']);
    // }

  }
  // loginPage(){
  //   if (this.userID == 1) {
  //     this._router.navigate(['/posted-jobs']);
  //   } else {
  //     this._router.navigate(['/artisan-profile']);
  //   }
  // }

}
