import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-artisan-profile',
  templateUrl: './artisan-profile.component.html',
  styleUrls: ['./artisan-profile.component.css']
})
export class ArtisanProfileComponent implements OnInit {
  approveArtisans: any;
  categories: any;
 
  constructor(private userService: UserService) { }


  @Input() artis = {
    name: '',
    surname: '',
    description: '',
    artID:''
  }
  ngOnInit() {
    this.gettingApprovedArt();
    this.gettingAllCategories();
    this.userInfo();
  
  
  }

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

  userInfo(){
    this.userService.$isLoggedIn
    .subscribe((data) =>{
      console.log("user data pleasse", data);
    })
  }

    GetEachArtisan(art) {
    this.artis = art;
    console.log(art);
   }

  
   getArtisansBasedOnCategory(id) {
     this.userService.GetJobsbasedOnCatgory(id).subscribe(data => {
       this.approveArtisans = data.data;
       console.log(this.approveArtisans);
     })
   }
  }


