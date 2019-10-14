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
  artisanFm: FormGroup;



  selectedCategory: number;

  @Input() artis = {
    name: '',
    surname: '',
    description: ''
  }

  //For the data that needs to be send to the table
  @Input() sendData = { name: '', surname: '', email: '', contacts: '', address: '', address2: '', password: '', category: '' }

  constructor(private adminservice: AdminServiceService

  ) { }

  ngOnInit() {
    this.getAllArtisans();
    this.getCategories();
    //  this.getData()
  }

  selectCategory(cat) {
    // console.log(cat)

  }


  getData() {

    this.adminservice.getArtisanData(this.sendData).subscribe( () =>{
        // console.log(this.sendData)
      }
    )
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


  getCat() {
    this.adminservice.GetAllCategories().subscribe(data => {
      this.categories = data.data;
      console.log(data.data);
    })
  }


}
