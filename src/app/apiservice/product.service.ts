import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private signupData ="http://localhost:3000/signup" 
  private productDetailsApi ="http://localhost:3000/productData" 

  constructor(private http: HttpClient) { }
  // getProducts(): Observable<any> {
  //   return this.http.get(this.apiUrl)
  // }
 

  userLogin(data:any):Observable<any>{
    return this.http.post(this.signupData,data);
  }
 getsignupValue():Observable<any>{
  return this.http.get(this.signupData)
}
postproductAddAdmin(data:any):Observable<any>{
  return this.http.post(this.productDetailsApi,data)
}
getProductList():Observable<any>{
  return this.http.get(this.productDetailsApi)
}
deleteProductList(id:number):Observable<any>{
  const deleteUrl=`${this.productDetailsApi}/${id}`
  return this.http.delete(deleteUrl)
}


  // getProductById(productId:number):Observable<any>{
  //   const url= `${this.apiUrl}/${productId}`;
  // return this.http.get(url)    
  // }


}
