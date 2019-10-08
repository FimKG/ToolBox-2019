import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from '../../admin-service.service';

@Component({
  selector: 'app-artisans',
  templateUrl: './artisans.component.html',
  styleUrls: ['./artisans.component.css']
})
export class ArtisansComponent implements OnInit {
artisans:any;
categories:any;
  constructor(private adminservice: AdminServiceService) { }

  ngOnInit() {
    this. getAllArtisans();
    this.getCategories();
  }

  getAllArtisans()
  {
    this.adminservice.getAllArtisanApplication().subscribe(data=>{
      this.artisans = data.data;
      console.log(data.data);
    })
  }

  getCategories()
  {

    this.adminservice.GetAllCategories().subscribe(resp =>{
        this.categories = resp.data;
        console.log(this.categories);
    })
  }

}
