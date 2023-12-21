import { Component, Input,Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  // @Input() val =0
  @Input() fata : {name:string,email:string} ={name:'', email:''} ;
  @Output() updateDataEvent =new EventEmitter<string>();

  ngOnInit(): void {
    
  }

}
