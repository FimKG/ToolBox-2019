import { Component, OnInit, Input, Output } from '@angular/core';
import { AdminServiceService } from '../../admin-service.service';

@Component({
  selector: 'app-job-poster',
  templateUrl: './job-poster.component.html',
  styleUrls: ['./job-poster.component.css']
})
export class JobPosterComponent implements OnInit {
  jobposterArray: any;
  selectedCategory: number;
  categories: any;
  clientID: '';

 @Input() jobpp = {
    name: '',
    surname: '',
    email: '',
    password: '',
    contacts: '',
    address: '',
    address2: '',
    clientID: ''
  }

  constructor(private adminservice: AdminServiceService) { }
  
  // newClient() {
  //   this.adminservice.newClient(this.jobpp)
  //     .subscribe(
  //       res => console.log(),
  //       err => console.log()
  //     )

  // }

  newClients() {

    return this.adminservice.newClient(this.jobpp).subscribe( res =>{
      console.log(res)
     },
     err =>{ console.log(err.message)}
   )
   
 }
  

  ngOnInit() {
    this.getClients();
    this.GetAllCategories();

  }

  getStatus(clientID) {
    this.adminservice.getStatus(clientID).subscribe()
  }

  getClients() {
    this.adminservice.getClients().subscribe(data => {
      this.jobposterArray = data.data;
      //console.log(data.data);
    })
  }
  getUpdated() {
    this.adminservice.getUpdated(this.jobpp).subscribe()
  }

  GetAllCategories() {
    this.adminservice.GetAllCategories().subscribe(data => {
      this.categories = data.data;
      //console.log(data.data);
    })
  }

  getSelectedCat(category) {
    this.selectedCategory = category.catID;
    //console.log(this.selectedCategory);
    this.getArtisansBasedOnCategory(this.selectedCategory);

  }

  getArtisansBasedOnCategory(id) {
    this.adminservice.GetJobPosterOnCatgory(id).subscribe(data => {
      this.jobposterArray = data.data;
      // console.log(this.jobposterArray);
    })
  }
  GetEachClient(art) {
    this.jobpp = art;
  }
}

