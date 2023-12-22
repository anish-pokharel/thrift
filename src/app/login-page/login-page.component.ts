import { Component, OnInit } from '@angular/core';
import { ProductService } from '../apiservice/product.service';
import { Router } from '@angular/router';
import * as alertify from 'alertifyjs';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
  constructor( private apiService:ProductService,private router:Router ){

  }

loginDataObject:any={ name:'', password:'' }
signupData:any[]=[]
// loginButton(){
//   const loginData={
//     name: this.loginDataObject.name,
//     password:this.loginDataObject.password
//   }
//   this.loginDataArray.push(this.loginDataObject)
//   console.log(this.loginDataArray)
//   this.loginDataObject={};
//  console.log(loginData)

//  this.apiService.loginInfo().subscribe((logininfo)=>{
//   console.log(logininfo);

//   if(logininfo && logininfo.loginCredentails){
//     const {name ,password} = logininfo.loginCredentails as {name:string,password:string};
 
//   if(name== loginData.name && password == loginData.password){
//     console.log('login in sucessfully ');
//     alert('login in sucedd')
//     this.router.navigate(['/work'])
//   }
//   else{
//     console.log('Invalid login ')
//   }
//   }

//  })

// }
loginButton(){
  const{name,password}=this.loginDataObject;
  const user = this.signupData.find((userData)=>
  userData.name ==name && userData.password==password
  )
  if(user){
    this.router.navigate(['/work'])
    alertify.success('login is sucessful ')
    // this.menuComponent.isUserLoggedIn=false;
  }
  else{
    alertify.error('login failes')
  }
}
ngOnInit(): void {
  this.apiService.getsignupValue().subscribe((value)=>{
    this.signupData=value;
  })
}
}
