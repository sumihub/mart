import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {
  public product;
  constructor(public main:AppComponent){ }

  ngOnInit() {
     this.product = this.main.details; 
     console.log(this.product);
       
  }

}
