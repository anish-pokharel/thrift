import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.css']
})
export class PractiseComponent {
data= '';
items:string[]=[];
addName(){
this.items.push(this.data);
this.data="";
}
delete(index:number){
 this.items.splice(index,1)
}
}
