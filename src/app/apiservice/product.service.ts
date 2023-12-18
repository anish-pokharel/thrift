import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products'; //variable 

  constructor(private http: HttpClient) { }
  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl)
  }


  getProductById(productId:number):Observable<any>{
    const url= `${this.apiUrl}/${productId}`;
  return this.http.get(url)    
  }


}
