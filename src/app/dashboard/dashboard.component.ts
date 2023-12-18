import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedSection: string | null = null;

showSection(section:string){
  this.selectedSection= section;
}
ngOnInit(): void {
  this.selectedSection='Item1'
}
}
