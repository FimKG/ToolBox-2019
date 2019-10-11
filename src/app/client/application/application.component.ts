import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  categories: any;
  cat_ID : Number;
  // artisanApplication = {}
  @Input() artisanApplication = {  name:'', surname: '',email:'',address:'', address2:'',catID:'',password:'' }

  constructor(private userService: UserService) { }

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
    return this.userService.setUser(this.artisanApplication)
    .subscribe(
      res => {console.log(res)
      localStorage.setItem('token', res.token)
    },
      err => console.log(err))
    // console.log(this.artisanApplication);
  }

}
