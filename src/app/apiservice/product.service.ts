import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products'; //variable 
  private apiPractise ='https://api.weatherbit.io/v2.0/history/hourly';
  private countryList=' https://restcountries.com/v3.1/all';
  private signupData ="http://localhost:3000/signup" 

  constructor(private http: HttpClient) { }
  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl)
  }
  getWeather():Observable<any>{
    return this.http.get(this.apiPractise)
  }
  getCountryList():Observable<any>{
    return this.http.get(this.countryList);
  }

  userLogin(data:any):Observable<any>{
    return this.http.post(this.signupData,data);
  }
 getsignupValue():Observable<any>{
  return this.http.get(this.signupData)
}


  getProductById(productId:number):Observable<any>{
    const url= `${this.apiUrl}/${productId}`;
  return this.http.get(url)    
  }


}
