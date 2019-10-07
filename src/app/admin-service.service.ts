import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http: HttpClient) { }

  GetAllJobPosters()
  {
    return this.http.get<any>('http://168.172.186.39:5000/client');
  }

  GetAllApplications()
  {
    return this.http.get<any>('http://168.172.186.39:5000/artisan');

  }

  GetAllApprovedArtisans()
  {
    return this.http.get<any>('http://168.172.186.39:5000/approvedClient');
  }

  //get all categories
  GetAllCategories()
  {
    return this.http.get<any>('http://168.172.186.39:5000/category');
  }

  //get all declined artisans
  GetAllDeclinedArtisans()
  {
    return this.http.get<any>('http://168.172.186.39:5000/declinedClient');
  }
}
