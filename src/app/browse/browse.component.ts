import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterPipePipe} from '../filter-pipe.pipe';
import { CartComponent } from '../cart/cart.component';
import { DetailsComponent } from '../details/details.component';
import { AppComponent } from '../app.component'
@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  providers:[DetailsComponent]
})
export class BrowseComponent implements OnInit {

  public data:any;
  public products:any;
  public brandvalue;
  public filters:any;
  public check:boolean = false;
  public filterVal:any = null;
  public cart=[];
  public isDetails = false;
  public product:any;
  constructor(private http: HttpClient,
              public main:AppComponent,
              public detail:DetailsComponent) { }
  
  doFilter(en,state){
         this.filterVal = [en,state];
         console.log(this.filterVal);
            
  }
  add(prod){
    this.main.addedToCart.push(prod);
    
  }
  details(prod){
      this.product=prod;
      this.detail.product =prod;
      this.main.details = prod;
      console.log(this.product);
      
      this.isDetails = !this.isDetails;
  }
  // setproducts(){
  //   this.cartprodcs = this.cart;
  // }
  ngOnInit(){
     this.http.get('../assets/products.json').subscribe(data => {
           this.data = data;
           this.products = this.data.products;
           this.filters = this.data.filters;
           console.log(this.filters);
           
     })
  }
 

}
