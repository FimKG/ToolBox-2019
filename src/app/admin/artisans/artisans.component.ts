import { Component, OnInit, Input } from '@angular/core';
import { AdminServiceService } from '../../admin-service.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-artisans',
  templateUrl: './artisans.component.html',
  styleUrls: ['./artisans.component.css']
})
export class ArtisansComponent implements OnInit {
  artisans: any;
  categories: any;
  artisanFm:FormGroup;
  // artis: any;
  
  selectedCategory: number;

  @Input() artis = {
    name: '',
    surname: '',
    description: ''
  }

  constructor(private adminservice: AdminServiceService
    // artinFM:Form
    ) { }

  ngOnInit() {
    this.getAllArtisans();
    this.getCategories();
  }

  getAllArtisans() {
    this.adminservice.getAllArtisanApplication().subscribe(data => {
      this.artisans = data.data;
      console.log(data.data);
    })
  }

  getCategories() {

    this.adminservice.GetAllCategories().subscribe(resp => {
      this.categories = resp.data;
      console.log(this.categories);
    })
  }

  getSelectedCat(category) {
    this.selectedCategory = category.catID;
    console.log(this.selectedCategory);
    this.getArtisansBasedOnCategory(this.selectedCategory);

  }

  getArtisansBasedOnCategory(id) {
    this.adminservice.GetArtsansbasedOnCatgory(id).subscribe(data => {
      this.artisans = data.data;
      console.log(this.artisans);
    })
  }

  GetEachArtisan(art) {
    this.artis = art;
    console.log(art);
  }

}
