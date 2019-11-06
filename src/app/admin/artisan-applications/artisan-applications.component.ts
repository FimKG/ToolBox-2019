import { Component, OnInit, Input, Output } from '@angular/core';
import {AdminServiceService} from '../../admin-service.service';

@Component({
  selector: 'app-artisan-applications',
  templateUrl: './artisan-applications.component.html',
  styleUrls: ['./artisan-applications.component.css']
})
export class ArtisanApplicationsComponent implements OnInit {

  selectedCategory: number;
  applications: any;
  categories: any;
  approvedArt: any;
  apps: any;
  

   @Input() artApplications = {

    email: '',
    contacts: '',
    name:'',
    surname:'',
    catID:'',
    artID:'',
    address:'',
    address2:'',
    password:'',
    status:'',
    reason:''
  }

  
  @Input() artApplications2 = {

    email: '',
    contacts: '',
    name:'',
    surname:'',
    catID:'',
    artID:'',
    address:'',
    address2:'',
    password:'',
    status:'',
    reason:''
  }

  constructor(private adminservice: AdminServiceService) { }

  ngOnInit() {
    this.GetAllApplications();
    this. GetAllCategories();
    
   
  }

  GetAllApplications()
  {
    this.adminservice.getAllArtisanApplication().subscribe(data=>{
      this.applications = data.data;
      console.log(this.applications);
    })
  }

  GetAllCategories()
  {
    this.adminservice.GetAllCategories().subscribe(data=>{
      this.categories = data.data;
      console.log(data.data);
    })
  }

  getSelectedCat(category)
  {
    this.selectedCategory = category.catID;
    console.log(this.selectedCategory);
    this. getArtisansBasedOnCategory(this.selectedCategory);
   
  }

  getArtisansBasedOnCategory(id)
  {
    this.adminservice.GetArtsansbasedOnCatgory(id).subscribe(data=>{
      this.applications = data.data;
    })
  }

  GetApp2(application){
    this.artApplications2 = application;
  }

  getApprovedApplications() {
    this.adminservice.getApprovedApplications(this.artApplications2).subscribe(data =>{this.GetAllApplications();
    })
  }

  GetApp(application){
    this.artApplications = application;
    this.artApplications2 = application;
  }

  getDeclinedApplications() {
    this.adminservice.getDeclinedApplications(this.artApplications).subscribe()
  }

}
