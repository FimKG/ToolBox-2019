import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { AdminServiceService } from '../../admin-service.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  approveArtisans: any;
  Artisans: any;
  categories: any;
  Posters: any;


constructor(private userService: UserService) { }

  ngOnInit() {
    // this.gettingAllArtisans();
    this.gettingAllCategories();
    this.gettingAllJobs();
    this.gettingApprovedArt();
  
  }

  // gettingAllArtisans()
  // {
  //   this.userService.getAllArtisans().subscribe(data=>{
  //     this.Artisans = data.results,
  //     console.log(this.Artisans);
  //   });
  // }
  gettingApprovedArt(){
    this.userService.GetAllApprovedArtisans().subscribe(data=>{
      this.approveArtisans = data.data;
       console.log(this.approveArtisans)
     })
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

