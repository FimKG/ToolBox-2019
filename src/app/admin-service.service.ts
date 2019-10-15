import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http: HttpClient) { }

  getTotalNumOfJobPosters()
  {
    return this.http.get<any>('http://168.172.186.39:5000/total_job_posters');
  }

  getTotalOfJobsPosted()
  {
    return this.http.get<any>('http://168.172.186.39:5000/totalJobs');
  }

  getTotalNumberOfDeclinedArtisans()
  {
    return this.http.get<any>('http://168.172.186.39:5000/totaldeclinedArtisan');
  }

  getTotalNumberOfApprovedArtisans()
  {
    return this.http.get<any>('http://168.172.186.39:5000/totalApprovedArtisan');
  }

  getTotalNumberOfArtisans()
  {
    return this.http.get<any>('http://168.172.186.39:5000/totalartisan');
  }

  //get all jobs posted
  GetAllJobs()
  {
    return this.http.get<any>('http://168.172.186.39:5000/job_poster');
  }

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

    //Get All artisans
    GetAllArtisans()
    {
      return this.http.get<any>('http://168.172.186.39:5000/artisan');
    }

    //get artisans based on category
    GetArtsansbasedOnCatgory(id: number)
    {
      return this.http.get<any>('http://168.172.186.39:5000/artisan/catID/'+id);
    }

    //get jobs based on category
    GetJobsbasedOnCatgory(id: number)
    {
      return this.http.get<any>('http://168.172.186.39:5000/job/catID/'+id);
    }

    //get Declined Artisans based on category
    GetDeclinedbasedOnCatgory(id: number)
    {
      return this.http.get<any>('http://168.172.186.39:5000/declinedartisan/catID/'+id);
    }

     //get Approved Artisans based on category
     GetApprovedbasedOnCatgory(id: number)
     {
       return this.http.get<any>('http://168.172.186.39:5000/aprovedArt/catID/'+id);
     }

       //get Approved Artisans based on category
        GetJobPosterOnCatgory(id: number)
       {
          return this.http.get<any>('http://168.172.186.39:5000/client/catID/'+id);
        }

    
    
    
   

    //get all job posters
    getClients(id: number)
    {
      return this.http.get<any>('http://168.172.186.39:5000/client/catID/'+id);
    }
      getUpdated(jobpp )
     {
      return this.http.post<any>('http://168.172.186.39:5000/client/update',jobpp,{});
    }
    
    //  getUpdated()
    //  {
    //  return this.http.get<any>('http://168.172.188.153:5000/UpdateClients/:clientId');
    //  }
} 

