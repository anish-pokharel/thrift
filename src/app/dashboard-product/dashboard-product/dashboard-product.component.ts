import { Component, OnInit, numberAttribute } from '@angular/core';
import { ProductService } from 'src/app/apiservice/product.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-dashboard-product',
  templateUrl: './dashboard-product.component.html',
  styleUrls: ['./dashboard-product.component.css']
})
export class DashboardProductComponent implements OnInit {
  productData: any = {}
  productListTable:any[] =[];
  editList: boolean =false;
  editProductId:number |null=null
  constructor(private productApi: ProductService) {

  }
  ngOnInit(): void {
    this.productTable()
  }
  addProduct() {
    const productInfo = {
      productname: this.productData.productname,
      price: this.productData.price,
      desc: this.productData.desc,
      image: this.productData.image
    }
    if(this.editList && this.editProductId!==null )
    {
      this.productApi.updateProduct(this.editProductId, productInfo).subscribe((data) => {
        console.log(data)
      if (data) {
        alertify.success('Product Added')
      }
      else {
        alertify.error("Product failed")
      }
      this.editProductId=null;
      this.editList=false;


    })}
    else{

    this.productApi.postproductAddAdmin(productInfo).subscribe((data) => {
      console.log(data)
      if (data) {
        alertify.success('Product Added')
      }
      else {
        alertify.error("Product failed")
      }

    })
  }


  }
  productTable(){
    this.productApi.getProductList().subscribe((data)=>{
      console.log(data)
      this.productListTable=data;
    })
  }
  deletePrdouctList(productId:number):void{

    this.productApi.deleteProductList(productId).subscribe((data)=>{
      if(data){

        alertify.sucess('Item delete')
      }
      else{
        alertify.error('item delere failed');

      }
      // window.location.reload()
    },
    )
  }
  editProductList(product:any){
    this.editList=true;
    this.editProductId=product.id;
    

    this.productData.productname=product.productname;
    this.productData.price=product.price;
    this.productData.desc=product.desc;
    this.productData.image=product.image;
  }
}
