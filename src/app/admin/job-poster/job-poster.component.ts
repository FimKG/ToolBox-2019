import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from '../../admin-service.service';

@Component({
  selector: 'app-job-poster',
  templateUrl: './job-poster.component.html',
  styleUrls: ['./job-poster.component.css']
})
export class JobPosterComponent implements OnInit {
  jobposterArray: any;
  selectedCategory: number;
  categories: any;
  ge
 constructor(private adminservice: AdminServiceService) { }

  ngOnInit() {
    this.getClients();
    this. GetAllCategories();
   
  }
  getClients()
  {
    this.adminservice.getClients().subscribe(data=>{
      this.jobposterArray = data.data;
      console.log(data.data);
    })
  }

  GetAllCategories()
  {
    this.adminservice.GetAllCategories().subscribe(data=>{
      this.categories = data.data;
      console.log(data.data);
    })
  }

<<<<<<< HEAD
  GetEachJobPoster(jobposter)
  {
    console.log(jobposter);
=======
  getSelectedCat(category)
  {
    this.selectedCategory = category.catID;
    console.log(this.selectedCategory);
    this. getArtisansBasedOnCategory(this.selectedCategory);
   
  }

  getArtisansBasedOnCategory(id)
  {
    this.adminservice.GetJobPosterOnCatgory(id).subscribe(data=>{
      this.jobposterArray = data.data;
      console.log(this.jobposterArray);
    })
>>>>>>> e54b38740d2c266a369d617ede78800cc734eb4d
  }
}

