import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
<<<<<<< HEAD
import {Post} from '../app/Post';
=======
// import {Post} from '../app/Post';
>>>>>>> 8f10534bdcb83e3d1955b179d894571743eecc16
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

<<<<<<< HEAD
  anonymousUrl ='http://localhost:1313/anonymous';
  categoryUrl = 'http://localhost:1313/category';
  recognizedUrl ='http://localhost:1313/recognized/GetAll';
  AdminLogInUrl = 'http://localhost:1313/admin';
  clientUrl ='http://168.172.188.153:5000/';
  catUrl ='http://168.172.188.153:5000/';
  // anonymousUrl ='http://192.168.137.1:1313/anonymous';
  // categoryUrl = 'http://192.168.137.1:1313/category';
  // recognizedUrl ='http://192.168.137.1:1313/recognized/GetAll';
  // AdminLogInUrl = 'http://192.168.137.1:1313/admin';


  

  constructor(private http:HttpClient) { }

  public PostAnonymous(user)
  {
    return this.http.post<any>(this.anonymousUrl,user, {});
  }

  public getCategory()
  {
    return this.http.get<any>(this.categoryUrl);
  }

  public PostRecognized(user)
  {
    return this.http.post<any>(this.recognizedUrl, user, {});
  }
  public getAdminLogIn()
  {
    return this.http.get<any>(this.AdminLogInUrl);
  }

  public getRecognized()
  {
    return this.http.get<any>(this.recognizedUrl);
  }
 
public getAnonymous()
{
  return this.http.get<any>(this.anonymousUrl);
}

public getClient()
{
  return this.http.get<any>(this.clientUrl + 'client');
}
public getCat()
{
  return this.http.get<any>(this.catUrl + 'category');
}
=======
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

>>>>>>> 8f10534bdcb83e3d1955b179d894571743eecc16
 
}
