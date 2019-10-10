import { Component, OnInit, Input } from '@angular/core';
import {AdminServiceService} from '../../admin-service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  numOfApplications: any;

  constructor(private adminservice: AdminServiceService) { }
 

  ngOnInit() {

    this.getNumApplications();
  }
  
  getNumApplications()
  {
    this.adminservice.getTotalNumberApplications().subscribe(data =>{
      this.numOfApplications = data;
    
      console.log(this.numOfApplications);
  })
  }

}
