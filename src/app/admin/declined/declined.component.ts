import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from '../../admin-service.service';

@Component({
  selector: 'app-declined',
  templateUrl: './declined.component.html',
  styleUrls: ['./declined.component.css']
})
export class DeclinedComponent implements OnInit {

  DeclienArtisans:any;
  categories:any;

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
     this.DeclienArtisans = data
     console.log(this.DeclienArtisans);
    })
  }
}
