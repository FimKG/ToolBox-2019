import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  visible = false;
   @Input() registerUserData = {  name:'', surname: '',email:'',contacts:'',address:'', address2:'',password:'' }
    // registerUserData = {}


  constructor(private _auth : UserService, private _router: Router) { }

  ngOnInit() {
  }

  registerUser() {
    this._auth.registerClient(this.registerUserData)
    .subscribe(
      res => {console.log(res)
      // localStorage.setItem('token', res.token)
      this._router.navigate(['/login'])
    },
      err => console.log(err)
      )
    
  }
  



}
