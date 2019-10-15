import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  categories: any;
  cat_ID : Number;
  error: boolean = false;
  errorMessage: String = "";
  dataLoading: boolean = false;
  // private querySubscription;
  savedChanges: boolean = false;

  // artisanApplication = {}
  @Input() artisanApplication = {  name:'', surname: '',email:'',address:'', address2:'',catID:'',password:'' }

  constructor(private userService: UserService, private _router: Router) { }

  ngOnInit() {
    return this.userService.getCategory()
    .subscribe(response =>
     this.categories = response.data);
   }

   getCatId(e){
    this.cat_ID = e;
    console.log(e.catID);
  }

  userApp(){
    this.dataLoading = false;
    return this.userService.setUser(this.artisanApplication)
    .subscribe(
      (res) => {
        if (res["errorCode"] != 0) {
          this.error = false;
          this.errorMessage = "";
          this.dataLoading = true;
          this.savedChanges = true;
          // this._router.navigate(['/login'])
        } else {
          this.error = true;
          this.errorMessage =res["errorMessage"];
          this.dataLoading = false;
        }
        console.log(res)
        // this._router.navigate(['/login'])
    },
      (err) => {
        this.error = true;
        this.errorMessage = err.message;
        this.dataLoading = false;
        console.log(err)
      },
      () => {
        this.dataLoading = false;
    });
    // console.log(this.artisanApplication);
  }

}
