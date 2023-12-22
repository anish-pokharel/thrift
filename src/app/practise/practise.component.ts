import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ProductService } from '../apiservice/product.service';

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.css']
})
export class PractiseComponent implements OnInit {
  results: any[] =[]
  countrtListshow:any[]=[];
  datas=10;

data= '';
items:string[]=[];
userDetails=[
  {name:'Anish', email:'anish@gamil.com'},
  {name:'Sunita', email:'anish@gamil.com'},
  {name:'ansu', email:'ansu@gamil.com'},
  {name:'suan', email:'suan@gamil.com'}
]
constructor(private apiservice:ProductService){
this.countryList();
}
addName(){
this.items.push(this.data);
this.data="";
}
// delete(index:number){
//   this.items.splice(index,1);
// }
delete(index: number) {
  this.items.splice(index, 1);
}
ngOnInit(): void {
  // this.apiservice.getWeather().subscribe((result)=>{
  //   console.log(result);
  //   this.results=result

  // },
  // (error)=>{
  //   console.error(error)
  // }
  // )
}
countryList(){
  // this.apiservice.getCountryList().subscribe((result)=>{
  //   console.log(result);
  //   this.countrtListshow=result;
  // })
}
updateChild(){
  this.datas=Math.floor(Math.random()*10);
}

updateData(item: any){
 console.warn(item)
}
}
