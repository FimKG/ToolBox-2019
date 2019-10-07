import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from '../../admin-service.service';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.css']
})
export class ApprovedComponent implements OnInit {

  constructor(private adminservice: AdminServiceService) { }

  ngOnInit() {
    this.getApprovedArtisans();
  }


  getApprovedArtisans()
  {
    this.adminservice.GetAllApprovedArtisans().subscribe(data=>{
      console.log(data)
    })
  }
}
