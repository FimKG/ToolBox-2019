import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error: boolean = false;
  errorMessage: String = "";
  dataLoading: boolean = false;
  // private querySubscription;
  savedChanges: boolean = false;

  // visible = false;
   @Input() registerUserData = {  name:'', surname: '',email:'',contacts:'',address:'', address2:'',password:'' }
    // registerUserData = {}


  constructor(private _auth : UserService, private _router: Router) { }

  ngOnInit() {
  }

  registerUser() {
    this.dataLoading = true;
   return this._auth.registerClient(this.registerUserData)
    .subscribe(
      (res) => {
        if (res["errorCode"] != 0) {
          this.error = false;
          this.errorMessage = "message";
          this.dataLoading = false;
          this.savedChanges = true;
          // this._router.navigate(['/login'])
        } else {
          this.error = true;
          this.errorMessage =res["errorMessage"];
          this.dataLoading = false;
        }
        console.log(res)
      // localStorage.setItem('token', res.token)
      // this._router.navigate(['/login'])
    },
      (err) => {
        this.error = true;
        this.errorMessage = err.message;
        this.dataLoading = false;
      },
      // console.log(err)
      () => {
        this.dataLoading = false;}
      );
    
  }
  



}
