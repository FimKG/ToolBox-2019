import { Component, OnInit,Input} from '@angular/core';
import {AdminServiceService} from '../../admin-service.service';

@Component({
  selector: 'app-job-poster',
  templateUrl: './job-poster.component.html',
  styleUrls: ['./job-poster.component.css']
})
export class JobPosterComponent implements OnInit {
  jobposterArray: any;
  selectedCategory: number;
  categories: any;
   updating:any;

  @Input() jobpp = {
    name: '',
    surname: '',
    email: '',
    password:'',
    clientID:''
 
    
  }
  
 constructor(private adminservice: AdminServiceService) { }

  ngOnInit() {
    this.getClients();
    this. GetAllCategories();
   
  }
  getClients()
  {
    this.adminservice.getClients().subscribe(data=>{
      this.jobposterArray = data.data;
      console.log(data.data);
    })
  }
  getUpdated()
  {
    this.adminservice.getUpdated(this.jobpp ).subscribe()
  }

  GetAllCategories()
  {
    this.adminservice.GetAllCategories().subscribe(data=>{
      this.categories = data.data;
      console.log(data.data);
    })
  }

  getSelectedCat(category)
  {
    this.selectedCategory = category.catID;
    console.log(this.selectedCategory);
    this. getArtisansBasedOnCategory(this.selectedCategory);
   
  }

  getArtisansBasedOnCategory(id)
  {
    this.adminservice.GetJobPosterOnCatgory(id).subscribe(data=>{
      this.jobposterArray = data.data;
      console.log(this.jobposterArray);
    })
  }
  GetEachClient(art) {
    this.jobpp = art;
    // console.log(art);
  }
}

