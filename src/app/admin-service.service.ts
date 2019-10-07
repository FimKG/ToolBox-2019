import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http: HttpClient) { }

  //get all approved artisans
  GetAllApprovedArtisans()
  {
    return this.http.get<any>('http://168.172.186.39:5000/aprovedArt');
  }

  //get all categories
  GetAllCategories()
  {
    return this.http.get<any>('http://168.172.186.39:5000/category');
  }

  //get all declined artisans
  GetAllDeclinedArtisans()
  {
    return this.http.get<any>('http://168.172.186.39:5000/declinedartisan');
  }

  //get all  clients Applications
  getAllArtisanApplication()
    {
      return this.http.get<any>('http://168.172.186.39:5000/artisan');
    }

    GetAllArtisans()
    {
      return this.http.get<any>('http://168.172.186.39:5000/artisan');
    }

    //get artisans based on category
    GetArtsansbasedOnCatgory(id)
    {
      return this.http.get<any>('http://168.172.186.39:5000/artisan/catID'+id);
    }
}
