import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from '../../admin-service.service';

@Component({
  selector: 'app-declined',
  templateUrl: './declined.component.html',
  styleUrls: ['./declined.component.css']
})
export class DeclinedComponent implements OnInit {

  DeclinedArtisans:any;
  categories:any;
  selectedCategory: number;

  constructor(private adminservice: AdminServiceService) { }

  ngOnInit() {
    this.getDeclineArtisans();
    this.getAllCategories();
  }

  getAllCategories()
  {
    this.adminservice.GetAllCategories().subscribe(data=>{
     this.categories = data.data
     console.log(this.categories);
    })
  }

  getDeclineArtisans()
  {
    this.adminservice.GetAllDeclinedArtisans().subscribe(data=>{
     this.DeclinedArtisans = data.data;
     console.log(this.DeclinedArtisans);
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
    this.adminservice.GetDeclinedbasedOnCatgory(id).subscribe(data=>{
      this.DeclinedArtisans = data.data;
      console.log(this.DeclinedArtisans);
    })
  }
}
