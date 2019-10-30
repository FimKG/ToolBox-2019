import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, of, observable, BehaviorSubject } from 'rxjs';
import { Token } from '@angular/compiler';
import { Router } from '@angular/router';
import { LoginComponent } from './client/login/login.component'
import { Response } from 'selenium-webdriver/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://168.172.188.153:5000/'; 
  //  url = 'http://168.172.186.39:5000/'; 
  // url = 'http://localhost:5000/';
  //  registerUrl = 'http://168.172.188.153:5000/artisan';
  // adminUrl = 'http://168.172.186.39:5000/artisan';
  // categoryUrl = 'http://168.172.186.39:5000/_category';
  // loginUrl = 'http://168.172.186.39:5000/_login';
  // jobUrl = 'http://168.172.186.39:5000/register';

  $isLoggedIn = new EventEmitter();
  users: LoginComponent; 
  // private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn')|| 'false')

  constructor(private httpClient: HttpClient, private _router: Router) { }

   setUser(user)
  {
    return this.httpClient.post<any>(this.url + 'art/register' ,user);
  }

  registerClient(user) {
    return this.httpClient.post<any>(this.url + 'client', user);
  }

  userLogin(user) {

    // this.users.loginuser
    // this.users.users = console.log(Response.name)
    this.$isLoggedIn.emit(user);
    return this.httpClient.post<any>(this.url + '_login', user); 
  }

  getCategory() {
    return this.httpClient.get<any>(this.url + '_category');
  }

  
  loggedIn()
  {
    return !!localStorage.getItem('token') 

  }

  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }
  artProfile(){
    this._router.navigate(['/user-profile'])
  }

  getToken(){
     return localStorage.getItem('token')
  }


  public getClient(user)
  {
    return this.httpClient.post<any>(this.url + 'register', user, {});
  }

  getDataAdmin() {
    return this.httpClient.get<any>(this.url + 'artisan');
  }

  getAllArtisans() {
    return this.httpClient.get<any>(this.url + 'art/all');
  }
  GetAllApprovedArtisans() {
    return this.httpClient.get<any>(this.url + 'aprovedArt');
  }
  getClients() {
    return this.httpClient.get<any>(this.url + 'client');
  }

  OnUploadImg(fd){
    return this.httpClient.post<any>(this.url + 'upload_pic', fd);
  }

  GetJobs(){
    return this.httpClient.get<any>(this.url + 'all_jobs');
  }

  // setLoggedIn(value : boolean){
  //   this.loggedInStatus = true;
  //   localStorage.setItem('loggedIn', 'true')
  // }

  // get isLoggedIn(){
  //   return JSON.parse(localStorage.getItem('loggedIn')|| this.loggedInStatus.toString())
  // }
 
  GetJobsbasedOnCatgory(id: number) {
    return this.httpClient.get<any>(this.url + 'job/catID/' + id);
  }

}
