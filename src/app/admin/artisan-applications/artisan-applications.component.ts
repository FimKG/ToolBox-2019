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

  // @Input() artApplications = {

    email: '';
    contacts: '';
    name:'';
    surname:'';
    catID:'';
    artID:'';
    address:'';
    address2:'';
    password:'';
    status:'';
    reason:'';
    artApplications:any;

  // }


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

  getApprovedApplications(address, address2, artID, catID, password, email, name, surname, contacts, status, reason) {
    this.adminservice.getApprovedApplications(address, address2, artID, catID, password, email, name, surname, contacts, status, reason).subscribe()
  }

  GetApp(application){
    this.artApplications = application;
  }

  getDeclinedApplications() {
    this.adminservice.getDeclinedApplications(this.artApplications).subscribe()
  }

 

  




}
