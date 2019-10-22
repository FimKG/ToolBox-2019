import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http: HttpClient) { }

  //get total number of Job posters(client)
  getTotalNumOfJobPosters() {
    return this.http.get<any>('http://168.172.188.153:5000/totaljobPoster');
  }

  //get total number number of jobs posted
  getTotalOfJobsPosted() {
    return this.http.get<any>('http://168.172.188.153:5000/totalJobs');
  }

  //get total number of declined Artisans
  getTotalNumberOfDeclinedArtisans() {
    return this.http.get<any>('http://168.172.188.153:5000/totaldeclinedArtisan');
  }

  //get total number of approved Artisans 
  getTotalNumberOfApprovedArtisans() {
    return this.http.get<any>('http://168.172.188.153:5000/totalApprovedArtisan');
  }

  //get total number of Artisans
  getTotalNumberOfArtisans() {
    return this.http.get<any>('http://168.172.188.153:5000/totalartisan_');
  }

  //get all jobs posted
  GetAllJobs() {
    return this.http.get<any>('http://168.172.188.153:5000/job_poster');
  }

  //get all approved artisans
  GetAllApprovedArtisans() {
    return this.http.get<any>('http://168.172.188.153:5000/aprovedArt');
  }

  //get all categories
  GetAllCategories() {
    return this.http.get<any>('http://168.172.188.153:5000/category');
  }

  //get all declined artisans
  GetAllDeclinedArtisans() {
    return this.http.get<any>('http://168.172.188.153:5000/declinedartisan');
  }

  //get all  clients Applications
  getAllArtisanApplication() {
    return this.http.get<any>('http://168.172.188.153:5000/artisan');
  }

  //Get All artisans
  GetAllArtisans() {
    return this.http.get<any>('http://168.172.188.153:5000/artisan');
  }

  //get artisans based on category
  GetArtsansbasedOnCatgory(id: number) {
    return this.http.get<any>('http://168.172.188.153:5000/artisan/catID/' + id);
  }

  //get jobs based on category
  GetJobsbasedOnCatgory(id: number) {
    return this.http.get<any>('http://168.172.188.153:5000/job/catID/' + id);
  }

  //get Declined Artisans based on category
  GetDeclinedbasedOnCatgory(id: number) {
    return this.http.get<any>('http://168.172.188.153:5000/declinedartisan/catID/' + id);
  }

  //get Approved Artisans based on category
  GetApprovedbasedOnCatgory(id: number) {
    return this.http.get<any>('http://168.172.188.153:5000/aprovedArt/catID/' + id);
  }

  //get Approved Artisans based on category
  GetJobPosterOnCatgory(id: number) {
    return this.http.get<any>('http://168.172.188.153:5000/client/catID/' + id);
  }

  //get all job posters
  getClients() {
    return this.http.get<any>('http://168.172.188.153:5000/client');
    // return this.http.get<any>('http://168.172.186.39:5000/client/catID/');
  }

  public getArtisanData(user) {
    // console.log(user) Aletta Incorrect API address
    return this.http.post<any>('http://168.172.188.153:5000/art/register', user, {});
  }

  getUpdated(jobpp) {
    return this.http.post<any>('http://168.172.188.153:5000/client/update', jobpp, {});
  }
  getStatus(clientID)
    {
      return this.http.post<any>('http://168.172.188.153:5000/clientStatus',{clientID});
      
    }

    newClient(jobpp){
      return this.http.post<any>('http://168.172.188.153:5000/client', jobpp, {});
    }
  

  //update Job posted
  getJobPostedUpdate(jobsPosted)
  { 
    return this.http.post<any>('http://168.172.188.153:5000/updatejob', jobsPosted, {})
   
  }

  //Delete job posted (status)
  getJobPostedStatus(job_id)
  {
    return this.http.post<any>('http://168.172.188.153:5000/job_status', {job_id});
  }

  //Delete Artisan (status)
  getArtisanStatus(artID)
  {
    return this.http.post<any>('http://168.172.188.153:5000/artisan_status', {artID});
  }

  
}
