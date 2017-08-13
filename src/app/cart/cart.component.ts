import { Component, OnInit , Input,OnDestroy} from '@angular/core';
import { AppComponent } from '../app.component'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
  
})

export class CartComponent  implements OnInit{
  public cart=[];
  constructor(private main:AppComponent){
  }
  ngOnInit() {
     this.cart = this.main.addedToCart;
  }

onchange(){
}
}
