import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-artisan-profile',
  templateUrl: './artisan-profile.component.html',
  styleUrls: ['./artisan-profile.component.css']
})
export class ArtisanProfileComponent implements OnInit {
  Artisans: any;
  categories: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.gettingAllArtisans();
    this.gettingAllCategories();
  
  }

  gettingAllArtisans()
  {
    this.userService.getAllArtisans().subscribe(data=>{
      this.Artisans = data.results,
      console.log(this.Artisans);
    });
  }

  gettingAllCategories()
  {
    this.userService.getCategory().subscribe(data=>{
      this.categories = data.data;
      console.log(data.data);
    })
  }
  }


