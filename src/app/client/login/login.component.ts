import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output('change') change = new EventEmitter();

  loginUserData = {}
  userID: any;
  error: boolean = false;
  errorMessage: String = "";
  dataLoading: boolean = false;
  private querySubscription;
 

  constructor(private userService: UserService, private _router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    this.dataLoading = false;
    // this.users = this.loginUserData;
    this.userService.userLogin(this.loginUserData) 
      .subscribe(
        res => {
          if (res["errorCode"] != 0) {
            console.log(res)
            this.error = false;
            this.errorMessage = "";
            this.dataLoading = true;
            
            if (this.userID == 1) {
              this._router.navigate(['/posted-jobs']);
              localStorage.setItem('token', res.token);
            }else
            {
              this._router.navigate(['/home']);
            }
             
            // this.getUserType([this.userID]);
            
            if (this.userID == 2) {
              console.log(res)
              localStorage.setItem('token', res.token);
               this._router.navigate(['/artisan-profile']);
            } 
          }else {
            this.error = true;
            this.errorMessage = res["errorMessage"];
            this.dataLoading = false;
            
          }
         
        },
        err=>{
          console.log(err)
          this.error = true;
          this.errorMessage = err.message;
          this.dataLoading = false;
        },
        () => {
          this.dataLoading = false;
         }

      );
  }
  getUserType(e) {
    this.userID = e;
    console.log(e);
    // console.log(this.userID);
  }

    // if (this.userID == 1) {
    //   console.log(this.userID);
    //   this._router.navigate(['/posted-jobs']);
    // } else {
    //   this._router.navigate(['/artisan-profile']);
    // }

  // }
  // loginPage(){
  //   if (this.userID == 1) {
  //     this._router.navigate(['/posted-jobs']);
  //   } else {
  //     this._router.navigate(['/artisan-profile']);
  //   }
  // }

}

