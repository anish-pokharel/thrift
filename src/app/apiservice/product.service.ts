import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  isUserLoggedIn = new BehaviorSubject <boolean> (false);
  private signupData ="http://localhost:3000/signup" 
  private productDetailsApi ="http://localhost:3000/productData" 

  constructor(private http: HttpClient,private router:Router) { }
  // getProducts(): Observable<any> {
  //   return this.http.get(this.apiUrl)
  // }
 

  // auth guard ko logic
  userLogin(data:any){
     this.http.post(this.signupData,data,
      {observe:'response'}).subscribe((result)=>{
        console.log(result);
        if(result){
          this.isUserLoggedIn.next(true)
          localStorage.setItem('USER ',JSON.stringify(result));
          this.router.navigate(['/work'])
        }
        else{}
      });
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
updateProduct(productId:number,productInfo:any):Observable<any>{
  return this.http.put<any>(`${this.productDetailsApi}${productId}`,productInfo)
}


  // getProductById(productId:number):Observable<any>{
  //   const url= `${this.apiUrl}/${productId}`;
  // return this.http.get(url)    
  // }


}
