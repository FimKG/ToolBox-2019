import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService) { }
 
 
  Artisans: any;
  categories: any;


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

