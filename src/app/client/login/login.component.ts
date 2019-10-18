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
  loginuser: any;
  users: any

  checkArray=" this.loginuser";

  // @Output() loginuser = { name:'', surname: '',email:'',address:'', address2:'',catID:'',password:'' }
  // loginuser: any;
  
 

  constructor(private userService: UserService, private _router: Router) { }

  ngOnInit() {
  }
  
  loginUser() {
    this.dataLoading = false;
    // return this.userService.userLogin(this.loginUserData)
    //   .subscribe(
    //     res => {
    //       if (res["errorCode"] != 0 && this.userID == 1) {
            
    //         console.log(this.loginuser)
    //  this.users = this.loginUserData;
    this.userService.userLogin(this.loginUserData) 
      .subscribe(
        res => {
          if (res["errorCode"] != 0) {
            this.loginuser = res.user[0];
            // this.userInfor(this.loginuser);
            console.log(this.loginuser)
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
 

}

