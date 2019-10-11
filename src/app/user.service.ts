import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Token } from '@angular/compiler';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://168.172.186.39:5000/'; 
  //  registerUrl = 'http://168.172.188.153:5000/artisan';
  // adminUrl = 'http://168.172.186.39:5000/artisan';
  // categoryUrl = 'http://168.172.186.39:5000/_category';
  // loginUrl = 'http://168.172.186.39:5000/_login';
  // jobUrl = 'http://168.172.186.39:5000/register';



  constructor(private httpClient: HttpClient) { }

   setUser(user)
  {
    return this.httpClient.post<any>(this.url + 'art/register' ,user);
  }

  registerClient(user) {
    return this.httpClient.post<any>(this.url + 'client', user);
  }

  userLogin(user) {
    return this.httpClient.post<any>(this.url + '_login', user);
  }

  

  getCategory() {
    return this.httpClient.get<any>(this.url + '_category');
  }

  
  
  loggedIn()
  {
    return !!localStorage.getItem('token') 

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
  getClients() {
    return this.httpClient.get<any>(this.url + 'client');
  }
  
 
}
