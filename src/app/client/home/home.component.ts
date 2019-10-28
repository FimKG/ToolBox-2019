import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { AdminServiceService } from '../../admin-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService) { }
 
 
  Artisans: any;
  categories: any;
  Posters: any;
 


  ngOnInit() {
    this.gettingAllArtisans();
    this.gettingAllCategories();
    this.gettingAllJobs();
  
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

  gettingAllJobs()
  {
    this.userService.GetJobs().subscribe(data=>{
      this.Posters = data.data,
       console.log(this.Posters);
    });
  }

}

