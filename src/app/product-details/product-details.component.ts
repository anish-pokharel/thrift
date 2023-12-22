import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../apiservice/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  productId: number | undefined;
  productName: string | undefined;
  productPrice!: number;
  productImage!: number;
  productRate!: number;
  count=0;
  
  constructor(private route : ActivatedRoute, public productservice:ProductService,
    private router :Router
    ){}
ngOnInit(): void {
  // this.route.params.subscribe(params=>{
  //   this.productId =+ params['productId'];
  //   console.log(this.productId)
  //   this.loadProducDetails();
  // })
}
// loadProducDetails(){
//   this.productservice.getProductById(this.productId).subscribe(product=>{
//     this.productName=product.name;
//     this.productPrice=product.price;
//   })
// }
loadProducDetails() {
  // if (this.productId !== undefined) {
  //   this.productservice.getProductById(this.productId).subscribe(product => {
  //     this.productName = product.title;
  //     this.productPrice = product.price;
  //     this.productImage=product.image;
  //     this.productRate=product.rating.rate;
  //   });
  // }
}
increment(){
this.count++
}

decrement(){
if(this.count>0){
  this.count--;
}
}
signUp(){
this.router.navigate(['/signup'])
}
}
