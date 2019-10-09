import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from '../../admin-service.service';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.css']
})
export class ApprovedComponent implements OnInit {

  approveArtisans: any;
  categories: any;
  selectedCategory: number;
  constructor(private adminservice: AdminServiceService) { }

  ngOnInit() {
    this.getApprovedArtisans();
    this. GetAllCategories();
  }


  getApprovedArtisans()
  {
    this.adminservice.GetAllApprovedArtisans().subscribe(data=>{
     this.approveArtisans = data.data;
      console.log(this.approveArtisans)
    })
  }

  GetAllCategories()
  {
      this.adminservice.GetAllCategories().subscribe(data=>{
        this.categories = data.data;
      console.log(data.data)  
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
    this.adminservice.GetApprovedbasedOnCatgory(id).subscribe(data=>{
      this.approveArtisans = data.data;
      console.log(this.approveArtisans);
    })
  }
}
