import { Component, OnInit, Input, Output } from '@angular/core';
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
  artID: '';



  selectedCategory: number;

  @Input() artis = {
    name: '',
    surname: '',
    description: '',
    artID:''
  }

  //For the data that needs to be send to the table
  @Input() sendData = { firstName: '', surname: '', email: '', contacts: '', address: '', address2: '', password: '', catID: '' }

  constructor(private adminservice: AdminServiceService) { }

  ngOnInit() {
    this.getAllArtisans();
    this.getCategories();
    //  this.getData()
  }

  selectCategory(cat) {
    console.log(cat)

  }


  getData() {

     return this.adminservice.getArtisanData(this.sendData).subscribe( (res) =>{
       console.log(res)
      },
      (err) =>{ console.log(err)}
    )
  }

  getAllArtisans() {
    this.adminservice. GetAllArtisans().subscribe(data => {
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

  getArtisanStatus(artID) {
    this.adminservice.getArtisanStatus(artID).subscribe()
  }

}
