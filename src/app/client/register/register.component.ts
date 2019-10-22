import { Component, OnInit, Input, Directive } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

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

@Directive({
   selector: '[appConfirmPassword]',
   providers: [{
     provide: NG_VALIDATORS,
     useExisting : ConfirmPassword,
     multi: true
   }]
})
export class ConfirmPassword implements Validator {
  @Input() appConfirmPassword: string;
   validate(control: AbstractControl): {[key: string]: any} | null {
     const controlToCompare = control.parent.get(this.appConfirmPassword);
     if (controlToCompare && controlToCompare.value !== control.value) { 
       return { 'notEqual': true };
     }
     return null;
   }
}
