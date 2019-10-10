import { Component, OnInit, Input } from '@angular/core';
import { AdminServiceService } from '../../admin-service.service';

@Component({
  selector: 'app-job-poster',
  templateUrl: './job-poster.component.html',
  styleUrls: ['./job-poster.component.css']
})
export class JobPosterComponent implements OnInit {
  jobposterArray: any;
  jobPoster: any;
  selectedCategory: number;
  categories: any;
  updating: any;
  constructor(private adminservice: AdminServiceService) { }


  @Input() job ={
    
  }


  ngOnInit() {
    this.getClients();
    this.GetAllCategories();
    this.getUpdated();


  }
  getClients() {
    this.adminservice.GetAllJobs().subscribe(data => {
      this.jobposterArray = data.results;
      console.log(this.jobposterArray);
    })

  }
  getJobposter() {
    this.adminservice.GetAllJobs().subscribe(data => {
      this.jobposterArray = data.results;
      console.log(this.jobposterArray);
    })

  }

  GetEachClient(job) {
    this.jobPoster = job;
    console.log(job);
  }

  GetAllCategories() {
    this.adminservice.GetAllCategories().subscribe(data => {
      this.categories = data.data;
      console.log(data.data);
    })
  }

  getSelectedCat(category) {
    this.selectedCategory = category.catID;
    console.log(this.selectedCategory);
    this.getArtisansBasedOnCategory(this.selectedCategory);

  }

  getArtisansBasedOnCategory(id) {
    this.adminservice.GetJobPosterOnCatgory(id).subscribe(data => {
      this.jobposterArray = data.data;
      console.log(this.jobposterArray);
    })
  }
  getUpdated() {
    this.adminservice.getUpdated().subscribe(data => {
      this.updating = data.data;
      console.log(this.updating);
    })
  }
}

