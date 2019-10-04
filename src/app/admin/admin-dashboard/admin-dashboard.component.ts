import { Component, OnInit, Input } from '@angular/core';
import {UserService} from 'src/app/user.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

 /* @Input()anonymousData={
    id: " ", message: " "
   
 }*/
  @Input()recogniseData={
    cat_id:" ",name: " ", surname: " ", contact: " ", email: " ", message: " "
    
 } 
 @Input()categoryData={
  id: " ", name: " "
}

  constructor(private userService:UserService) { }
  categories:any;
  test=false;
 categoryName:any;
 categoryName1:any;
 Recognized=[];


  ngOnInit() {

   
      return this.userService.getRecognized().subscribe(response=>
      this.Recognized = response);
       
       
      }

      takeRecData(e)
      {
    this.categoryData.id= e.id;
    this.recogniseData.cat_id = this.categoryData.id;
    console.log(this.recogniseData.name);
    console.log(this.recogniseData.surname);
    console.log(this.recogniseData.contact);
    console.log(this.recogniseData.email);
    console.log(this.recogniseData.cat_id);
    console.log(this.recogniseData.message);
    this.categoryName1=e.name;
    this.test=true;
      }
      /*
     

      takeAnonymousData(e){
        this.categoryData.id= e.id;
        this.anonymousData.id = this.categoryData.id;
        console.log(this.anonymousData.id);
        console.log(this.anonymousData.message);
        this.categoryName=e.name;
        this.test=true;
        console.log(e);
      }
      */
  }
  



