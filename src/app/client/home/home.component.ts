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
  selectedCategory: any;
  postedJobs: any;



constructor(private userService: UserService) { }

  ngOnInit() {
    this.gettingAllCategories();
    this.gettingAllJobs();
    this.gettingApprovedArt();
    this.getPostedJobs();

  }


  gettingApprovedArt() {
    this.userService.GetAllApprovedArtisans().subscribe(data => {
      this.approveArtisans = data.data;
      // console.log(this.approveArtisans)
    })
  }

  gettingAllCategories() {
    this.userService.getCategory().subscribe(data => {
      this.categories = data.data;
      // console.log(data.data);
    })
  }

  gettingAllJobs() {
    this.userService.GetJobs().subscribe(data => {
      this.Posters = data.data
        // console.log(this.Posters);
    });
  }

  // +++++++++++++++++++++++++++++++++++++++++++
  // getSelectedCat(category) {
  //   this.selectedCategory = category.catID;
  //   // console.log(this.selectedCategory);
  //   this.getArtisansBasedOnCategory(this.selectedCategory);

  // }
  // ==========================================================================
  getArtisansBasedOnCategory(id) {
    this.userService.GetJobsbasedOnCatgory(id).subscribe(
      data => {
      this.postedJobs = data;
    })
  }

  // ?======================================
  getPostedJobs() {
    this.userService.GetJobs().subscribe(data => {
      this.postedJobs = data.results;
      // console.log(this.postedJobs);
    })

  }

}

