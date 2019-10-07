import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://168.172.186.39:5000/'; 
  // registerUrl = 'http://168.172.186.39:5000/art/register';
  // adminUrl = 'http://168.172.186.39:5000/artisan';
  // categoryUrl = 'http://168.172.186.39:5000/_category';
  // loginUrl = 'http://168.172.186.39:5000/_login';
  // jobUrl = 'http://168.172.186.39:5000/register';


  constructor(private httpClient: HttpClient) { }

  public getNews(user)
  {
    return this.httpClient.post<any>(this.url + 'art/register',user);
    
  }

 

  getCategory() {
    return this.httpClient.get<any>(this.url + '_category');
  }

  loginUser(user)
  {

    return this.httpClient.post<any>(this.url + '_login', user);
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
