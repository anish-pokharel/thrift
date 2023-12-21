import { Component, OnInit } from '@angular/core';
import { ProductService } from '../apiservice/product.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  selectedCategory!: string;
  // isUserLoggedIn:boolean=true;
  constructor(private productService: ProductService,private router: Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        console.log(data);
        this.products = data;
      },
      (error) => {
        console.error("error fetching product :", error)
      }
    )
  }
  viewMoreProduct(productId:number){
    if(productId){

      this.router.navigate(['/product',productId])
    }
  }
  buyProduct(){

  }
}
