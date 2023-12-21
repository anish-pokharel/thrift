import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../apiservice/product.service';
import * as alertify from 'alertifyjs';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  constructor(private router:Router, private apiService:ProductService){}
  formData:any= {

  }
  user: any [] =[];
  ngOnInit(): void {
    
  }


  // addCart(){
  //   this.router.navigate(['/cart'])
  // }
  signUp(){
    const signupForm ={
      name:this.formData.name,
      password:this.formData.password,
      gender:this.formData.gender,
      birthday:this.formData.birthday,
      address:this.formData.address
    }
this.user.push(this.formData);
console.log('user data is ',this.user)
this.formData={};  
this.apiService.userLogin(signupForm).subscribe((rst)=>{
  console.log("data is saved")
  alertify.success('SignUp sucessfull')
  this.router.navigate(['/login'])

})
}

}
